/**
 * Main entry point — Bootstrap the app
 */

import './app-shell.js';
import { initRouter } from './router.js';
import { registerComponents } from './components/index.js';
import { setState } from './state/store.js';
import { observeAuth } from './services/firebase/auth.js';
import { isAdmin } from './services/firebase/repos/adminRepo.js';
import { listenThemes, listenParticipants } from './services/firebase/repos/themesRepo.js';
import { getAllThemes } from './data/themes.js';

// Register all Web Components
registerComponents();

// Initialize router
initRouter();

// Store unsubscribe functions
const unsubscribers = [];

// Initialize Firebase listeners
async function initFirebase() {
  // Observe auth state
  const unsubAuth = observeAuth(async (user) => {
    if (user) {
      // User logged in
      const admin = await isAdmin(user.uid);
      
      setState({
        auth: {
          ready: true,
          user: {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL
          },
          isAdmin: admin
        }
      });
      
      console.log('👤 User logged in:', user.displayName, admin ? '(Admin)' : '');
    } else {
      // User logged out
      setState({
        auth: {
          ready: true,
          user: null,
          isAdmin: false
        }
      });
      
      console.log('👤 User logged out');
    }
  });
  
  unsubscribers.push(unsubAuth);
  
  // Listen to themes
  const unsubThemes = listenThemes((themes) => {
    if (themes.length > 0) {
      setState({ data: { themes } });
      console.log('📚 Themes loaded from Firebase:', themes.length);
    } else {
      // Fallback to local themes
      setState({ data: { themes: getAllThemes() } });
      console.log('📚 Using local themes (Firebase empty)');
    }
  });
  
  unsubscribers.push(unsubThemes);
  
  // Listen to participants
  const unsubParticipants = listenParticipants((participants) => {
    if (participants && participants.length > 0) {
      setState({ data: { participants } });
      console.log('👥 Participants loaded from Firebase:', participants);
    }
  });
  
  unsubscribers.push(unsubParticipants);
}

// Start Firebase
initFirebase();

console.log('✨ NOITE app initialized');

// Cleanup on page unload (optional)
window.addEventListener('beforeunload', () => {
  unsubscribers.forEach(unsub => unsub());
});

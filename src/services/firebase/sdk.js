/**
 * Firebase SDK imports (ESM from gstatic) - versão 10.7.0
 */

// Firebase App
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js';

// Firebase Auth
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
} from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js';

// Firebase Realtime Database
import { 
  getDatabase, 
  ref, 
  onValue, 
  get, 
  child, 
  set, 
  update, 
  push, 
  remove,
  off
} from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js';

// Re-export
export {
  initializeApp,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  getDatabase,
  ref,
  onValue,
  get,
  child,
  set,
  update,
  push,
  remove,
  off
};

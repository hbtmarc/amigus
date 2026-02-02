/**
 * Firebase Auth service
 */

import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from './sdk.js';
import { auth } from './init.js';

/**
 * Login with Google (popup)
 */
export async function loginGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}

/**
 * Logout
 */
export async function logout() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
}

/**
 * Observe auth state changes
 * @param {Function} callback - Called with user object or null
 * @returns {Function} unsubscribe function
 */
export function observeAuth(callback) {
  return onAuthStateChanged(auth, callback);
}

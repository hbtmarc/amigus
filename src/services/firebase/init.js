/**
 * Firebase initialization
 */

import { initializeApp, getAuth, getDatabase } from './sdk.js';
import { firebaseConfig } from '../../config/firebase-config.js';

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

console.log('🔥 Firebase initialized');

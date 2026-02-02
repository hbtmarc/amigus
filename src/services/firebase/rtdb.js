/**
 * Firebase Realtime Database helpers
 */

import { ref, onValue, get, set, update, push, remove, off } from './sdk.js';
import { db } from './init.js';

/**
 * Listen to real-time updates at path
 * @param {string} path - Database path
 * @param {Function} callback - Called with (data, snapshot)
 * @returns {Function} unsubscribe function
 */
export function listen(path, callback) {
  const dbRef = ref(db, path);
  const listener = (snapshot) => {
    callback(snapshot.val(), snapshot);
  };
  
  onValue(dbRef, listener);
  
  // Return unsubscribe function
  return () => off(dbRef, 'value', listener);
}

/**
 * Get data once
 * @param {string} path - Database path
 * @returns {Promise} data
 */
export async function getOnce(path) {
  const snapshot = await get(ref(db, path));
  return snapshot.val();
}

/**
 * Create new item (generates key)
 * @param {string} path - Database path
 * @param {Object} data - Data to create
 * @returns {Promise<string>} generated key
 */
export async function create(path, data) {
  const newRef = push(ref(db, path));
  await set(newRef, data);
  return newRef.key;
}

/**
 * Set data at path (overwrites)
 * @param {string} path - Database path
 * @param {*} data - Data to set
 */
export async function setAt(path, data) {
  await set(ref(db, path), data);
}

/**
 * Update data at path (patches)
 * @param {string} path - Database path
 * @param {Object} patch - Data to update
 */
export async function updateAt(path, patch) {
  await update(ref(db, path), patch);
}

/**
 * Remove data at path
 * @param {string} path - Database path
 */
export async function removeAt(path) {
  await remove(ref(db, path));
}

/**
 * Admin repository
 */

import { getOnce } from '../rtdb.js';

/**
 * Check if user is admin
 * @param {string} uid - User ID
 * @returns {Promise<boolean>}
 */
export async function isAdmin(uid) {
  if (!uid) return false;
  
  try {
    const value = await getOnce(`/admins/${uid}`);
    return value === true;
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
}

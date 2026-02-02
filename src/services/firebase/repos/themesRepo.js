/**
 * Themes & Participants repository
 */

import { listen, getOnce, setAt, updateAt, removeAt } from '../rtdb.js';

const THEMES_PATH = '/v1/themes';
const PARTICIPANTS_PATH = '/v1/participants';

/**
 * Listen to themes in real-time
 * @param {Function} callback - Called with themes array
 * @returns {Function} unsubscribe
 */
export function listenThemes(callback) {
  return listen(THEMES_PATH, (data) => {
    if (!data) {
      callback([]);
      return;
    }
    
    // Convert object to array
    const themes = Object.keys(data).map(key => ({
      ...data[key],
      id: key
    }));
    
    callback(themes);
  });
}

/**
 * Listen to participants in real-time
 * @param {Function} callback - Called with participants array
 * @returns {Function} unsubscribe
 */
export function listenParticipants(callback) {
  return listen(PARTICIPANTS_PATH, (data) => {
    callback(data || []);
  });
}

/**
 * Upsert theme (create or update)
 * @param {Object} theme - Theme object with id
 */
export async function upsertTheme(theme) {
  const { id, ...data } = theme;
  
  if (!id) {
    throw new Error('Theme ID is required');
  }
  
  const now = Date.now();
  const themeData = {
    ...data,
    id,
    updatedAt: now,
    createdAt: data.createdAt || now
  };
  
  await setAt(`${THEMES_PATH}/${id}`, themeData);
}

/**
 * Delete theme
 * @param {string} themeId - Theme ID
 */
export async function deleteTheme(themeId) {
  await removeAt(`${THEMES_PATH}/${themeId}`);
}

/**
 * Update participants list
 * @param {Array<string>} list - Participant names
 */
export async function upsertParticipants(list) {
  await setAt(PARTICIPANTS_PATH, list);
}

/**
 * Seed themes (manual only, admin only)
 * @param {Array} localThemes - Array of theme objects
 */
export async function seedThemes(localThemes) {
  // Check if themes already exist
  const existing = await getOnce(THEMES_PATH);
  
  if (existing && Object.keys(existing).length > 0) {
    const confirm = window.confirm(
      `Já existem ${Object.keys(existing).length} temas no banco. Deseja substituir?`
    );
    if (!confirm) return;
  }
  
  // Convert array to object keyed by id
  const themesObject = {};
  const now = Date.now();
  
  localThemes.forEach(theme => {
    themesObject[theme.id] = {
      ...theme,
      createdAt: now,
      updatedAt: now
    };
  });
  
  await setAt(THEMES_PATH, themesObject);
  
  console.log(`✅ ${localThemes.length} temas publicados no banco`);
}

/**
 * Check if themes exist in database
 * @returns {Promise<boolean>}
 */
export async function hasThemes() {
  const data = await getOnce(THEMES_PATH);
  return data && Object.keys(data).length > 0;
}

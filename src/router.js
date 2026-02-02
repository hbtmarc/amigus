/**
 * Hash Router — SPA navigation for GitHub Pages
 * Simplified routes: /, /t, /deck, /playground
 */

import * as homePage from './pages/home.js';
import * as themePage from './pages/theme.js';
import * as deckPage from './pages/deck.js';
import * as playgroundPage from './pages/playground.js';

const routes = {
  '/': homePage,
  '/t': themePage,
  '/deck': deckPage,
  '/playground': playgroundPage,
};

let currentPage = null;
let currentRoute = null;
let retryCount = 0;
let retryHandle = null;

/**
 * Parse hash into route and query params
 */
function parseHash() {
  const hash = window.location.hash.slice(1) || '/';
  const [path, queryString] = hash.split('?');
  const params = new URLSearchParams(queryString);
  return { path, params };
}

/**
 * Navigate to a route
 */
export async function navigate(path, params = {}) {
  const queryString = new URLSearchParams(params).toString();
  const hash = queryString ? `${path}?${queryString}` : path;
  window.location.hash = hash;
}

/**
 * Route handler
 */
async function handleRoute() {
  const { path, params } = parseHash();
  const page = routes[path];

  if (!page) {
    console.warn(`Route not found: ${path}`);
    navigate('/');
    return;
  }

  // Unmount previous page
  if (currentPage && currentPage.unmount) {
    await currentPage.unmount();
  }

  // Mount new page
  const root = document.querySelector('#app-view');
  if (!root) {
    if (retryCount < 10) {
      retryCount += 1;
      if (!retryHandle) {
        retryHandle = requestAnimationFrame(() => {
          retryHandle = null;
          handleRoute();
        });
      }
      return;
    }
    console.error('App view container not found');
    return;
  }

  retryCount = 0;

  const ctx = {
    path,
    params: Object.fromEntries(params.entries()),
    navigate,
  };

  currentPage = page;
  currentRoute = path;

  if (page.mount) {
    await page.mount(root, ctx);
  }

  // Always scroll to top after navigation
  window.scrollTo({ top: 0, behavior: 'instant' });

  console.log(`📍 Navigated to ${path}`, ctx.params);
}

/**
 * Initialize router
 */
export function initRouter() {
  if (!window.location.hash || window.location.hash === '#') {
    window.location.hash = '#/';
  }

  // Handle hash changes
  window.addEventListener('hashchange', handleRoute);
  
  // Handle initial load
  handleRoute();
}

/**
 * Get current route
 */
export function getCurrentRoute() {
  return currentRoute;
}

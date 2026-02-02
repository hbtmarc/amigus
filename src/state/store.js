/**
 * Simple Pub/Sub Store — Global state management
 */

let state = {
  auth: {
    ready: false,
    user: null,
    isAdmin: false
  },
  data: {
    themes: [],
    participants: ['Luiza', 'Marcelino', 'Joyce', 'Matheus']
  },
  ui: {
    editorMode: false
  }
};

const listeners = new Set();

/**
 * Get current state (immutable)
 */
export function getState() {
  return JSON.parse(JSON.stringify(state));
}

/**
 * Update state and notify listeners
 */
export function setState(updates) {
  const prevState = { ...state };
  
  // Deep merge for nested objects
  if (updates.auth) {
    state.auth = { ...state.auth, ...updates.auth };
  }
  if (updates.data) {
    state.data = { ...state.data, ...updates.data };
  }
  if (updates.ui) {
    state.ui = { ...state.ui, ...updates.ui };
  }
  
  // Direct assignments for other keys
  Object.keys(updates).forEach(key => {
    if (!['auth', 'data', 'ui'].includes(key)) {
      state[key] = updates[key];
    }
  });
  
  listeners.forEach(listener => {
    listener(state, prevState);
  });
}

/**
 * Subscribe to state changes
 * Returns unsubscribe function
 */
export function subscribe(listener) {
  listeners.add(listener);
  
  return () => {
    listeners.delete(listener);
  };
}

/**
 * Reset state (useful for logout)
 */
export function resetState() {
  setState({
    auth: {
      ready: true,
      user: null,
      isAdmin: false
    },
    ui: {
      editorMode: false
    }
  });
}

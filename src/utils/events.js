/**
 * Event management — Track and cleanup listeners
 */

/**
 * Event registry for cleanup
 */
export class EventRegistry {
  constructor() {
    this.listeners = [];
  }

  /**
   * Register event listener
   */
  on(target, event, handler, options) {
    target.addEventListener(event, handler, options);
    this.listeners.push({ target, event, handler, options });
  }

  /**
   * Remove all registered listeners
   */
  cleanup() {
    this.listeners.forEach(({ target, event, handler, options }) => {
      target.removeEventListener(event, handler, options);
    });
    this.listeners = [];
  }
}

/**
 * Debounce function
 */
export function debounce(fn, delay = 300) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

/**
 * Throttle function
 */
export function throttle(fn, limit = 300) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Once — Execute handler only once
 */
export function once(target, event, handler) {
  const wrappedHandler = (e) => {
    handler(e);
    target.removeEventListener(event, wrappedHandler);
  };
  target.addEventListener(event, wrappedHandler);
}

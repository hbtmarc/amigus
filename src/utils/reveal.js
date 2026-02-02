/**
 * Reveal Animations Utility (Apple-style scroll reveals)
 * Uses IntersectionObserver for performance
 */

/**
 * Initialize reveal animations on elements with .reveal class
 * @param {HTMLElement} root - Container element to observe
 */
export function initRevealAnimations(root = document) {
  // Respect reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Skip animations, just make elements visible
    root.querySelectorAll('.reveal, .reveal-fade, .reveal-scale').forEach(el => {
      el.classList.add('revealed');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Optionally unobserve after revealing
          // observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% visible
      rootMargin: '0px 0px -50px 0px', // Trigger slightly before entering viewport
    }
  );

  // Observe all reveal elements
  root.querySelectorAll('.reveal, .reveal-fade, .reveal-scale').forEach((el) => {
    observer.observe(el);
  });

  return observer;
}

/**
 * Cleanup reveal observers
 * @param {IntersectionObserver} observer
 */
export function cleanupRevealAnimations(observer) {
  if (observer) {
    observer.disconnect();
  }
}

/**
 * UI Button — Web Component
 * Variants: primary, secondary, ghost, danger
 * States: disabled, loading
 */

class UIButton extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'disabled', 'loading', 'size'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  get variant() {
    return this.getAttribute('variant') || 'primary';
  }

  get size() {
    return this.getAttribute('size') || 'md';
  }

  get isDisabled() {
    return this.hasAttribute('disabled');
  }

  get isLoading() {
    return this.hasAttribute('loading');
  }

  render() {
    const variant = this.variant;
    const size = this.size;
    const disabled = this.isDisabled || this.isLoading;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
        }

        button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          font-family: var(--font-sans);
          font-weight: var(--font-semibold);
          border: 1px solid transparent;
          border-radius: var(--radius-full);
          cursor: pointer;
          min-height: var(--target-min);
          transition: transform var(--transition-base), box-shadow var(--transition-base), background var(--transition-base), color var(--transition-base), border-color var(--transition-base);
          outline: none;
          white-space: nowrap;
        }

        button:focus-visible {
          outline: var(--focus-ring-width) solid var(--focus-ring-color);
          outline-offset: var(--focus-ring-offset);
        }

        /* Sizes */
        .size-sm {
          padding: var(--space-2) var(--space-4);
          font-size: var(--text-sm);
          min-height: 36px;
        }

        .size-md {
          padding: var(--space-3) var(--space-6);
          font-size: var(--text-base);
          min-height: var(--target-min);
        }

        .size-lg {
          padding: var(--space-4) var(--space-8);
          font-size: var(--text-lg);
          min-height: var(--target-comfortable);
        }

        /* Variants */
        .variant-primary {
          background: var(--color-accent);
          color: var(--color-text-inverse);
          box-shadow: var(--shadow-xs);
        }

        .variant-primary:hover:not(:disabled) {
          background: var(--color-accent-hover);
          transform: translateY(-1px);
          box-shadow: var(--shadow-lg);
        }

        .variant-primary:active:not(:disabled) {
          background: var(--color-accent-active);
          transform: translateY(0);
          box-shadow: var(--shadow-sm);
        }

        .variant-secondary {
          background: var(--color-bg-secondary);
          color: var(--color-text);
          border-color: var(--color-border-light);
        }

        .variant-secondary:hover:not(:disabled) {
          background: var(--color-surface-hover);
          border-color: var(--color-border);
          box-shadow: var(--shadow-sm);
        }

        .variant-ghost {
          background: transparent;
          color: var(--color-text);
          border-color: transparent;
        }

        .variant-ghost:hover:not(:disabled) {
          background: var(--color-bg-secondary);
        }

        .variant-danger {
          background: var(--color-error);
          color: var(--color-text-inverse);
        }

        .variant-danger:hover:not(:disabled) {
          background: rgba(255, 59, 48, 0.9);
          box-shadow: var(--shadow-md);
        }

        button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .spinner {
          display: inline-block;
          width: 1em;
          height: 1em;
          border: 2px solid currentColor;
          border-right-color: transparent;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      </style>

      <button 
        class="variant-${variant} size-${size}"
        ${disabled ? 'disabled' : ''}
      >
        ${this.isLoading ? '<span class="spinner"></span>' : ''}
        <slot></slot>
      </button>
    `;
  }
}

customElements.define('ui-button', UIButton);

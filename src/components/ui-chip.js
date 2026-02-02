/**
 * UI Chip — Small tag/badge component
 * Usage: tags, categories, participant names
 */

class UIChip extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'size'];
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
    return this.getAttribute('variant') || 'default';
  }

  get size() {
    return this.getAttribute('size') || 'md';
  }

  render() {
    const variant = this.variant;
    const size = this.size;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
        }

        .chip {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          font-family: var(--font-sans);
          font-weight: var(--font-medium);
          border-radius: var(--radius-full);
          white-space: nowrap;
          transition: background var(--transition-fast), color var(--transition-fast), border-color var(--transition-fast);
          border: 1px solid transparent;
        }

        /* Sizes */
        .size-sm {
          padding: var(--space-1) var(--space-3);
          font-size: var(--text-xs);
        }

        .size-md {
          padding: var(--space-2) var(--space-4);
          font-size: var(--text-sm);
        }

        .size-lg {
          padding: var(--space-3) var(--space-5);
          font-size: var(--text-base);
        }

        /* Variants */
        .variant-default {
          background: var(--color-bg-secondary);
          color: var(--color-text);
          border-color: var(--color-border-light);
        }

        .variant-accent {
          background: var(--color-accent-light);
          color: var(--color-accent);
          border-color: rgba(0, 113, 227, 0.2);
        }

        .variant-success {
          background: rgba(52, 199, 89, 0.12);
          color: #248A3D;
          border-color: rgba(52, 199, 89, 0.25);
        }

        .variant-warning {
          background: rgba(255, 149, 0, 0.12);
          color: #C07806;
          border-color: rgba(255, 149, 0, 0.25);
        }

        .variant-error {
          background: rgba(255, 59, 48, 0.12);
          color: #D70015;
          border-color: rgba(255, 59, 48, 0.25);
        }

        .variant-outline {
          background: transparent;
          color: var(--color-text-secondary);
          border-color: var(--color-border);
        }
      </style>

      <span class="chip variant-${variant} size-${size}">
        <slot></slot>
      </span>
    `;
  }
}

customElements.define('ui-chip', UIChip);

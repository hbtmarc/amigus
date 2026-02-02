/**
 * UI Card — Web Component
 * Slots: header, default (body), footer
 */

class UICard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }

        .card {
          background: var(--color-surface);
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--color-border-light);
          overflow: hidden;
          transition: transform var(--transition-base), box-shadow var(--transition-base);
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .card-header {
          padding: var(--space-8);
          border-bottom: 1px solid var(--color-divider);
          font-weight: var(--font-semibold);
          color: var(--color-text);
        }

        .card-body {
          padding: var(--space-8);
          color: var(--color-text);
        }

        .card-footer {
          padding: var(--space-8);
          border-top: 1px solid var(--color-divider);
          background: var(--color-bg-secondary);
        }

        .card-header:empty,
        .card-footer:empty {
          display: none;
        }
      </style>

      <div class="card">
        <div class="card-header">
          <slot name="header"></slot>
        </div>
        <div class="card-body">
          <slot></slot>
        </div>
        <div class="card-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('ui-card', UICard);

/**
 * UI Modal — Web Component
 * Features: ESC to close, click outside to close, open/close methods
 */

class UIModal extends HTMLElement {
  static get observedAttributes() {
    return ['open', 'title'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.attachListeners();
  }

  disconnectedCallback() {
    this.cleanup();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'open' && this.shadowRoot) {
      this.handleOpenChange();
    }
    if (this.shadowRoot) {
      this.render();
    }
  }

  get isOpen() {
    return this.hasAttribute('open');
  }

  open() {
    this.setAttribute('open', '');
  }

  close() {
    this.removeAttribute('open');
    this.dispatchEvent(new CustomEvent('close'));
  }

  handleOpenChange() {
    if (this.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  handleEscape = (e) => {
    if (e.key === 'Escape' && this.isOpen) {
      this.close();
    }
  };

  attachListeners() {
    document.addEventListener('keydown', this.handleEscape);

    const backdrop = this.shadowRoot.querySelector('.backdrop');
    backdrop?.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        this.close();
      }
    });

    const closeBtn = this.shadowRoot.querySelector('.close-btn');
    closeBtn?.addEventListener('click', () => this.close());
  }

  cleanup() {
    document.removeEventListener('keydown', this.handleEscape);
    document.body.style.overflow = '';
  }

  render() {
    const title = this.getAttribute('title') || '';
    const isOpen = this.isOpen;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: ${isOpen ? 'block' : 'none'};
        }

        .backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
          backdrop-filter: var(--blur-md);
          z-index: var(--z-modal);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-6);
          animation: fadeIn var(--transition-base);
        }

        .modal {
          background: var(--color-surface);
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-xl);
          max-width: 42rem;
          width: 100%;
          max-height: 90vh;
          overflow: auto;
          animation: slideUp var(--transition-base);
        }

        .modal-header {
          padding: var(--space-8);
          border-bottom: 1px solid var(--color-divider);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .modal-title {
          font-size: var(--text-xl);
          font-weight: var(--font-semibold);
          margin: 0;
          color: var(--color-text);
        }

        .close-btn {
          background: var(--color-bg-secondary);
          border: 1px solid var(--color-border-light);
          font-size: 1.25rem;
          cursor: pointer;
          color: var(--color-text-secondary);
          padding: 0;
          width: 2.25rem;
          height: 2.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-full);
          transition: background var(--transition-fast), color var(--transition-fast), transform var(--transition-fast);
        }

        .close-btn:hover {
          background: var(--color-surface-hover);
          color: var(--color-text);
          transform: scale(1.02);
        }

        .close-btn:focus-visible {
          outline: var(--focus-ring-width) solid var(--focus-ring-color);
          outline-offset: var(--focus-ring-offset);
        }

        .modal-body {
          padding: var(--space-8);
          color: var(--color-text);
        }

        .modal-footer {
          padding: var(--space-8);
          border-top: 1px solid var(--color-divider);
        }

        .modal-footer:empty {
          display: none;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      </style>

      <div class="backdrop">
        <div class="modal">
          ${title ? `
            <div class="modal-header">
              <h3 class="modal-title">${title}</h3>
              <button class="close-btn" aria-label="Fechar">×</button>
            </div>
          ` : ''}
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `;

    // Reattach listeners after render
    if (isOpen) {
      const backdrop = this.shadowRoot.querySelector('.backdrop');
      backdrop?.addEventListener('click', (e) => {
        if (e.target === backdrop) {
          this.close();
        }
      });

      const closeBtn = this.shadowRoot.querySelector('.close-btn');
      closeBtn?.addEventListener('click', () => this.close());
    }
  }
}

customElements.define('ui-modal', UIModal);

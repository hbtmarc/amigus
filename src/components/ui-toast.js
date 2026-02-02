/**
 * UI Toast — Web Component
 * Simple notification system with auto-dismiss
 */

class UIToast extends HTMLElement {
  static get observedAttributes() {
    return ['message', 'type', 'duration'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.startTimer();
  }

  disconnectedCallback() {
    this.clearTimer();
  }

  get type() {
    return this.getAttribute('type') || 'info';
  }

  get duration() {
    return parseInt(this.getAttribute('duration')) || 3000;
  }

  startTimer() {
    this.timerId = setTimeout(() => {
      this.dismiss();
    }, this.duration);
  }

  clearTimer() {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  }

  dismiss() {
    this.style.animation = 'slideOut 200ms forwards';
    setTimeout(() => {
      this.remove();
    }, 200);
  }

  render() {
    const message = this.getAttribute('message') || '';
    const type = this.type;

    const icons = {
      success: '✓',
      error: '✕',
      warning: '⚠',
      info: 'ℹ',
    };

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          animation: slideIn var(--transition-base);
        }

        .toast {
          background: var(--color-surface);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          padding: var(--space-4) var(--space-6);
          display: flex;
          align-items: center;
          gap: var(--space-3);
          min-width: 16rem;
          max-width: 28rem;
          border: 1px solid var(--color-border-light);
        }

        .icon {
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: var(--font-semibold);
          flex-shrink: 0;
          color: var(--color-text-inverse);
        }

        .icon.success {
          background: var(--color-success);
        }

        .icon.error {
          background: var(--color-error);
        }

        .icon.warning {
          background: var(--color-warning);
        }

        .icon.info {
          background: var(--color-accent);
        }

        .message {
          flex: 1;
          font-size: var(--text-sm);
          color: var(--color-text);
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(16px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideOut {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(16px);
          }
        }
      </style>

      <div class="toast">
        <div class="icon ${type}">${icons[type]}</div>
        <div class="message">${message}</div>
      </div>
    `;
  }
}

customElements.define('ui-toast', UIToast);

/**
 * Toast helper — Show toast notification
 */
export function showToast(message, type = 'info', duration = 3000) {
  const container = document.querySelector('.toast-container') || createToastContainer();
  const toast = document.createElement('ui-toast');
  toast.setAttribute('message', message);
  toast.setAttribute('type', type);
  toast.setAttribute('duration', duration);
  container.appendChild(toast);
}

function createToastContainer() {
  const container = document.createElement('div');
  container.className = 'toast-container';
  document.body.appendChild(container);
  return container;
}

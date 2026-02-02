/**
 * UI Input — Web Component
 * Features: label, hint, error state, types
 */

class UIInput extends HTMLElement {
  static get observedAttributes() {
    return ['label', 'hint', 'error', 'type', 'placeholder', 'value', 'required'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.attachListeners();
  }

  attributeChangedCallback() {
    this.render();
  }

  get value() {
    return this.shadowRoot.querySelector('input')?.value || '';
  }

  set value(val) {
    const input = this.shadowRoot.querySelector('input');
    if (input) input.value = val;
  }

  attachListeners() {
    const input = this.shadowRoot.querySelector('input');
    
    input?.addEventListener('input', (e) => {
      this.dispatchEvent(new CustomEvent('change', { detail: e.target.value }));
    });
    
    // Forward keypress events
    input?.addEventListener('keypress', (e) => {
      this.dispatchEvent(new KeyboardEvent('keypress', {
        key: e.key,
        code: e.code,
        bubbles: true,
        cancelable: true,
        composed: true
      }));
    });
  }

  render() {
    const label = this.getAttribute('label') || '';
    const hint = this.getAttribute('hint') || '';
    const error = this.getAttribute('error') || '';
    const type = this.getAttribute('type') || 'text';
    const placeholder = this.getAttribute('placeholder') || '';
    const value = this.getAttribute('value') || '';
    const required = this.hasAttribute('required');

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        label {
          font-size: var(--text-sm);
          font-weight: var(--font-medium);
          color: var(--color-text);
        }

        input {
          font-family: var(--font-sans);
          font-size: var(--text-base);
          padding: var(--space-3) var(--space-4);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          background: var(--color-surface);
          color: var(--color-text);
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
          outline: none;
          min-height: var(--target-min);
        }

        input:focus {
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px var(--color-accent-light);
        }

        input.error {
          border-color: var(--color-error);
        }

        .hint {
          font-size: var(--text-xs);
          color: var(--color-text-secondary);
        }

        .error-text {
          font-size: var(--text-xs);
          color: var(--color-error);
        }
      </style>

      <div class="input-group">
        ${label ? `<label>${label}${required ? ' *' : ''}</label>` : ''}
        <input 
          type="${type}"
          placeholder="${placeholder}"
          value="${value}"
          ${required ? 'required' : ''}
          class="${error ? 'error' : ''}"
        />
        ${hint && !error ? `<span class="hint">${hint}</span>` : ''}
        ${error ? `<span class="error-text">${error}</span>` : ''}
      </div>
    `;
  }
}

customElements.define('ui-input', UIInput);

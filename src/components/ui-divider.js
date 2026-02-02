/**
 * UI Divider — Subtle separator line
 */

class UIDivider extends HTMLElement {
  static get observedAttributes() {
    return ['spacing', 'text'];
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

  get spacing() {
    return this.getAttribute('spacing') || 'md';
  }

  get text() {
    return this.getAttribute('text');
  }

  render() {
    const spacing = this.spacing;
    const text = this.text;

    const spacingMap = {
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '3rem'
    };

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          margin: ${spacingMap[spacing]} 0;
        }

        .divider {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .line {
          flex: 1;
          height: 1px;
          background: rgba(0, 0, 0, 0.08);
        }

        .text {
          font-size: 0.875rem;
          color: #86868B;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      </style>

      <div class="divider">
        ${text ? `
          <span class="line"></span>
          <span class="text">${text}</span>
          <span class="line"></span>
        ` : `
          <span class="line"></span>
        `}
      </div>
    `;
  }
}

customElements.define('ui-divider', UIDivider);

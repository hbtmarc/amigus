/**
 * App Shell — Minimal header + main container
 */

import { getState, setState, subscribe } from './state/store.js';
import { loginGoogle, logout } from './services/firebase/auth.js';

class AppShell extends HTMLElement {
  constructor() {
    super();
    this.unsubscribe = null;
    this.handleScroll = this.handleScroll.bind(this);
  }

  connectedCallback() {
    this.render();
    this.attachListeners();

    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.handleScroll();
    
    // Subscribe to state changes
    this.unsubscribe = subscribe(() => {
      this.render();
      this.attachListeners();
    });
  }

  disconnectedCallback() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }

    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const header = this.querySelector('.app-header');
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  render() {
    const state = getState();
    const { auth, ui } = state;
    const { user, isAdmin } = auth;

    this.innerHTML = `
      <div class="app-shell">
        <style>
          .app-header {
            position: sticky;
            top: 0;
            z-index: var(--z-sticky);
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: var(--blur-md);
            border-bottom: 1px solid var(--color-divider);
            transition: box-shadow var(--transition-base), background var(--transition-base), border-color var(--transition-base);
          }

          .app-header.scrolled {
            box-shadow: var(--shadow-md);
            background: rgba(255, 255, 255, 0.95);
            border-bottom-color: var(--color-border-light);
          }

          .header-content {
            max-width: var(--container-max);
            margin: 0 auto;
            padding: var(--space-4) var(--container-padding);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: var(--space-6);
          }

          .header-logo {
            font-size: var(--text-xl);
            font-weight: var(--font-bold);
            letter-spacing: var(--tracking-tight);
            color: var(--color-text);
            text-decoration: none;
          }

          .header-nav {
            display: flex;
            align-items: center;
            gap: var(--space-6);
          }

          .header-link {
            color: var(--color-text-secondary);
            font-size: var(--text-base);
            font-weight: var(--font-medium);
            transition: color var(--transition-fast);
            text-decoration: none;
          }

          .header-link:hover {
            color: var(--color-text);
          }

          .header-user {
            display: flex;
            align-items: center;
            gap: var(--space-3);
          }

          .header-avatar {
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            border: 1px solid var(--color-border-light);
            object-fit: cover;
          }

          .header-user-name {
            font-size: var(--text-sm);
            color: var(--color-text-secondary);
          }

          @media (max-width: 768px) {
            .header-content {
              flex-direction: column;
              align-items: flex-start;
              gap: var(--space-3);
            }

            .header-nav {
              width: 100%;
              justify-content: space-between;
              flex-wrap: wrap;
              gap: var(--space-3);
            }
          }
        </style>

        <header class="app-header">
          <div class="header-content">
            <a href="#/" class="header-logo">NOITE</a>
            
            <nav class="header-nav">
              <a href="#/" class="header-link" data-scroll="temas">Temas</a>
              <a href="#/" class="header-link" data-scroll="como-funciona">Como funciona</a>
              
              ${user ? `
                ${isAdmin ? `
                  <ui-button 
                    variant="${ui.editorMode ? 'primary' : 'ghost'}" 
                    size="sm" 
                    id="toggle-editor"
                  >
                    ${ui.editorMode ? '✓ Editor' : 'Editar'}
                  </ui-button>
                ` : ''}
                
                <div class="header-user">
                  ${user.photoURL ? `
                    <img 
                      src="${user.photoURL}" 
                      alt="${user.displayName}"
                      class="header-avatar"
                    />
                  ` : ''}
                  <span class="header-user-name">
                    ${user.displayName?.split(' ')[0] || 'User'}
                  </span>
                  <ui-button variant="ghost" size="sm" id="logout-btn">
                    Sair
                  </ui-button>
                </div>
              ` : `
                <ui-button variant="primary" size="sm" id="login-btn">
                  Entrar
                </ui-button>
              `}
            </nav>
          </div>
        </header>
        
        <main id="app-view" class="app-main" style="min-height: 100vh;"></main>
      </div>

      <!-- Login Modal -->
      <ui-modal id="login-modal" title="Entrar">
        <div style="text-align: center; padding: var(--space-lg);">
          <p style="margin-bottom: var(--space-xl); color: var(--color-text-secondary);">
            Faça login para acessar recursos de edição
          </p>
          <ui-button variant="primary" size="lg" id="google-login-btn">
            <span style="display: flex; align-items: center; gap: var(--space-sm);">
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"/>
                <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"/>
                <path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"/>
                <path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"/>
              </svg>
              Continuar com Google
            </span>
          </ui-button>
        </div>
      </ui-modal>
    `;
  }

  attachListeners() {
    // Login button
    const loginBtn = this.querySelector('#login-btn');
    const loginModal = this.querySelector('#login-modal');
    
    loginBtn?.addEventListener('click', () => {
      loginModal?.open();
    });

    // Google login
    const googleLoginBtn = this.querySelector('#google-login-btn');
    googleLoginBtn?.addEventListener('click', async () => {
      try {
        await loginGoogle();
        loginModal?.close();
      } catch (error) {
        console.error('Login failed:', error);
        alert('Erro ao fazer login. Verifique se os popups estão habilitados.');
      }
    });

    // Logout button
    const logoutBtn = this.querySelector('#logout-btn');
    logoutBtn?.addEventListener('click', async () => {
      if (confirm('Deseja sair?')) {
        await logout();
      }
    });

    // Toggle editor mode
    const toggleEditor = this.querySelector('#toggle-editor');
    toggleEditor?.addEventListener('click', () => {
      const state = getState();
      setState({ ui: { editorMode: !state.ui.editorMode } });
    });

    // Scroll to section links (only on home)
    this.querySelectorAll('[data-scroll]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('data-scroll');
        if (!targetId) return;

        if (window.location.hash !== '#/') {
          window.location.hash = '#/';
        }

        let attempts = 0;
        const tryScroll = () => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            return;
          }
          attempts += 1;
          if (attempts < 20) {
            requestAnimationFrame(tryScroll);
          }
        };

        requestAnimationFrame(tryScroll);
      });
    });
  }
}

customElements.define('app-shell', AppShell);

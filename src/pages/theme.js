/**
 * Theme Detail Page — Detalhes completos de um tema
 */

import { getState } from '../state/store.js';

export async function mount(root, ctx) {
  const themeId = ctx.params.id;
  const state = getState();
  const theme = state.data.themes.find(t => t.id === themeId);
  const { isAdmin } = state.auth;
  const { editorMode } = state.ui;

  if (!theme) {
    root.innerHTML = `
      <div style="text-align: center; padding: var(--space-4xl) 0;">
        <h2>Tema não encontrado</h2>
        <p class="text-secondary" style="margin-top: var(--space-md);">
          O tema que você procura não existe.
        </p>
        <ui-button variant="primary" onclick="window.location.hash='#/'" style="margin-top: var(--space-xl);">
          Voltar para Home
        </ui-button>
      </div>
    `;
    return;
  }

  root.innerHTML = `
    <div class="theme-detail-page">
      <section class="product-hero">
        <div class="container">
          <a href="#/" class="link-arrow">Voltar</a>
          <h1 class="product-hero__title">${theme.title}</h1>
          <p class="product-hero__subtitle">${theme.subtitle}</p>
          <div class="product-hero__meta">
            <ui-chip size="sm">⏱ ${theme.durationMin} min</ui-chip>
            ${theme.vibeTags.map(tag => `
              <ui-chip variant="accent" size="sm">${tag}</ui-chip>
            `).join('')}
          </div>
        </div>
      </section>

      <section class="product-section">
        <div class="product-section__content">
          <h2 class="product-section__title">O pitch</h2>
          <p class="text-lg text-secondary">${theme.pitch}</p>
        </div>
      </section>

      <section class="product-section">
        <div class="product-section__content">
          <h2 class="product-section__title">O que você precisa</h2>
          <ul class="product-list">
            ${theme.materials.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </section>

      <section class="product-section">
        <div class="product-section__content">
          <h2 class="product-section__title">Regras</h2>
          <ul class="product-list">
            ${theme.rules.map(rule => `<li>${rule}</li>`).join('')}
          </ul>
        </div>
      </section>

      ${theme.hostScript && theme.hostScript.length ? `
        <section class="product-section">
          <div class="product-section__content">
            <h2 class="product-section__title">Roteiro do anfitrião</h2>
            <ul class="product-list">
              ${theme.hostScript.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </section>
      ` : ''}

      <section class="product-section">
        <div class="product-section__content">
          <h2 class="product-section__title">Passos</h2>
          <ul class="product-list">
            ${theme.steps.map(step => `<li>${step.replace(/^\d+\.?\s*/, '')}</li>`).join('')}
          </ul>
        </div>
      </section>

      ${theme.prompts && theme.prompts.length ? `
        <section class="product-section">
          <div class="product-section__content">
            <h2 class="product-section__title">Prompts</h2>
            <ul class="product-list">
              ${theme.prompts.map(prompt => `<li>${prompt}</li>`).join('')}
            </ul>
          </div>
        </section>
      ` : ''}

      <section class="product-section">
        <div class="product-section__content text-center">
          <h2 class="product-section__title">Pronto para começar?</h2>
          <p class="text-secondary mb-6">
            Inicie o modo apresentação e conduza a noite do início ao fim.
          </p>
          <div class="flex justify-center gap-3 flex-wrap">
            ${editorMode && isAdmin ? `
              <ui-button variant="secondary" size="md" id="edit-theme-detail-btn">
                ✏️ Editar
              </ui-button>
            ` : ''}
            <ui-button variant="primary" size="lg" onclick="window.location.hash='#/deck?id=${theme.id}'">
              Abrir Apresentação →
            </ui-button>
          </div>
        </div>
      </section>
    </div>
  `;

  // Attach listeners
  if (editorMode && isAdmin) {
    document.getElementById('edit-theme-detail-btn')?.addEventListener('click', () => {
      alert(`Editar tema: ${theme.title}\n\nEditor será implementado em breve`);
    });
  }
}

export async function unmount() {
  // Cleanup
}

/**
 * Home Page — Hub de temas
 */

import { getState, subscribe } from '../state/store.js';
import { seedThemes, hasThemes } from '../services/firebase/repos/themesRepo.js';
import { getAllThemes } from '../data/themes.js';
import { initRevealAnimations, cleanupRevealAnimations } from '../utils/reveal.js';

let revealObserver = null;
let unsubscribe = null;

export async function mount(root, ctx) {
  if (unsubscribe) {
    unsubscribe();
  }

  renderHome(root);
  unsubscribe = subscribe(() => renderHome(root));
}

function renderHome(root) {
  const state = getState();
  const themes = state.data.themes || [];
  const participants = state.data.participants || [];
  const { isAdmin } = state.auth;
  const { editorMode } = state.ui;

  root.innerHTML = `
    <div class="home-page">
      <!-- Hero Section -->
      <section class="hero">
        <div class="container">
          <p class="hero__tagline reveal">Noites temáticas</p>
          <div class="hero__icon reveal">🌙</div>
          <h1 class="hero__title reveal">AMIGUS</h1>
          <p class="hero__subtitle reveal">
            Noites temáticas entre amigos. Escolha um tema e transforme o encontro em uma experiência memorável.
          </p>
          <div class="hero__ctas reveal">
            <ui-button variant="primary" size="lg" id="cta-start">Começar</ui-button>
            <ui-button variant="secondary" size="lg" id="cta-themes">Ver temas</ui-button>
          </div>
          <div class="hero__chips reveal"></div>
        </div>
      </section>

      <!-- Themes Grid -->
      <section id="temas" class="themes-grid">
        <div class="container">
          <div class="themes-grid__header reveal">
            <h2 class="themes-grid__title">Conheça a família.</h2>
            <p class="themes-grid__subtitle">
              Dez temas prontos para tornar suas noites inesquecíveis.
            </p>
          </div>

          ${editorMode && isAdmin ? `
            <div class="card reveal" style="margin-bottom: var(--space-12);">
              <h4 class="mb-2">🛠️ Modo Editor Ativo</h4>
              <p class="text-secondary mb-4">
                Você pode editar temas, criar novos ou publicar o seed inicial.
              </p>
              <div class="flex gap-3 flex-wrap">
                <ui-button variant="secondary" size="sm" id="publish-seed-btn">
                  📤 Publicar Seed no Banco
                </ui-button>
                <ui-button variant="secondary" size="sm" id="create-theme-btn">
                  ➕ Criar Tema
                </ui-button>
              </div>
            </div>
          ` : ''}

          ${themes.length === 0 ? `
            <div class="card reveal text-center" style="padding: var(--space-12);">
              <p class="text-secondary mb-6">
                Nenhum tema disponível ainda.
              </p>
              ${isAdmin && editorMode ? `
                <ui-button variant="primary" id="publish-seed-inline-btn">
                  Publicar Temas Iniciais
                </ui-button>
              ` : ''}
            </div>
          ` : `
            <div class="themes-grid__container">
              ${themes.map((theme, index) => {
                const badge = theme.vibeTags?.[0] || 'Especial';
                const tags = (theme.vibeTags || []).slice(0, 3);
                return `
                  <div class="theme-card reveal" data-theme-id="${theme.id}">
                    <span class="theme-card__badge">${badge}</span>
                    <h3 class="theme-card__title">${theme.title}</h3>
                    <p class="theme-card__subtitle">${theme.subtitle}</p>
                    <div class="theme-card__meta">
                      <ui-chip size="sm">⏱ ${theme.durationMin} min</ui-chip>
                    </div>
                    <div class="theme-card__tags">
                      ${tags.map(tag => `
                        <ui-chip variant="accent" size="sm">${tag}</ui-chip>
                      `).join('')}
                    </div>

                    ${editorMode && isAdmin ? `
                      <div class="theme-card__footer">
                        <div class="flex gap-2 flex-wrap">
                          <ui-button variant="secondary" size="sm" class="edit-theme-btn" data-theme-id="${theme.id}">
                            ✏️ Editar
                          </ui-button>
                          <ui-button variant="ghost" size="sm" class="delete-theme-btn" data-theme-id="${theme.id}">
                            🗑️ Excluir
                          </ui-button>
                        </div>
                      </div>
                    ` : `
                      <div class="theme-card__footer">
                        <a class="link-arrow" href="#/t?id=${theme.id}">Ver detalhes</a>
                      </div>
                    `}
                  </div>
                `;
              }).join('')}
            </div>
          `}

          ${themes.length > 0 ? `
            <div class="theme-randomizer reveal" style="margin-top: var(--space-16);">
              <div class="draw-box">
                <div class="draw-icon">🤔</div>
                <h3 class="draw-title">Não sabe o que escolher?</h3>
                <p class="draw-subtitle">Deixe a sorte decidir qual será o próximo tema!</p>
                <ui-button variant="primary" size="lg" id="random-theme-btn" onclick="window.drawRandomTheme && window.drawRandomTheme()" style="min-width: 240px; cursor: pointer;">
                  🎲 Sortear Tema
                </ui-button>
                <div id="random-theme-result" class="draw-result"></div>
              </div>
            </div>
          ` : ''}
        </div>
      </section>

      <!-- How It Works -->
      <section id="como-funciona" class="how-it-works">
        <div class="container">
          <div class="how-it-works__header reveal">
            <h2 class="how-it-works__title">Como funciona</h2>
            <p class="how-it-works__subtitle">Três passos simples para uma noite perfeita.</p>
          </div>
          <div class="how-it-works__steps">
            <div class="step reveal">
              <div class="step__icon">🎯</div>
              <div class="step__number">1</div>
              <h3 class="step__title">Escolha o tema</h3>
              <p class="step__description">Navegue pelos temas e escolha o que mais combina com o momento.</p>
            </div>
            <div class="step reveal">
              <div class="step__icon">📦</div>
              <div class="step__number">2</div>
              <h3 class="step__title">Prepare</h3>
              <p class="step__description">Organize materiais e alinhe o roteiro com o grupo.</p>
            </div>
            <div class="step reveal">
              <div class="step__icon">🎉</div>
              <div class="step__number">3</div>
              <h3 class="step__title">Execute o deck</h3>
              <p class="step__description">Use o modo apresentação para guiar a noite do início ao fim.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <div class="footer__content">
          <nav class="footer__nav">
            <a href="#temas" class="footer__link">Temas</a>
            <a href="#como-funciona" class="footer__link">Como funciona</a>
          </nav>
          <p class="footer__copyright">© 2026 AMIGUS — Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  `;

  // Attach listeners
  attachHomeListeners();

  // Reveal animations
  if (revealObserver) {
    cleanupRevealAnimations(revealObserver);
  }
  revealObserver = initRevealAnimations(root);
}

export async function unmount() {
  if (revealObserver) {
    cleanupRevealAnimations(revealObserver);
    revealObserver = null;
  }
  if (unsubscribe) {
    unsubscribe();
    unsubscribe = null;
  }
}

function attachHomeListeners() {
  const state = getState();
  const { isAdmin } = state.auth;

  document.getElementById('cta-start')?.addEventListener('click', () => {
    document.getElementById('temas')?.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('cta-themes')?.addEventListener('click', () => {
    document.getElementById('temas')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Random theme selector
  const randomThemeBtn = document.getElementById('random-theme-btn');
  const randomThemeResult = document.getElementById('random-theme-result');
  
  const handleRandomTheme = () => {
    console.log('Random theme button clicked!');
    const themes = state.data.themes || [];
    console.log('Available themes:', themes.length);
    if (themes.length === 0) {
      if (randomThemeResult) {
        randomThemeResult.className = 'draw-result draw-result--error';
        randomThemeResult.innerHTML = '⚠️ Nenhum tema disponível.';
      }
      return;
    }
    
    // Animação de sorteio
    if (randomThemeResult) {
      randomThemeResult.className = 'draw-result draw-result--loading';
      randomThemeResult.innerHTML = '🎲 Sorteando...';
    }
    
    setTimeout(() => {
      const randomTheme = themes[Math.floor(Math.random() * themes.length)];
      
      if (randomThemeResult) {
        randomThemeResult.className = 'draw-result draw-result--success';
        randomThemeResult.innerHTML = `
          <div class="draw-winner" style="flex-direction: column; gap: var(--space-4);">
            <div class="flex items-center gap-3">
              <span class="draw-winner__icon">🎉</span>
              <div>
                <div class="draw-winner__label">Tema Sorteado</div>
                <div class="draw-winner__name">${randomTheme.title}</div>
              </div>
            </div>
            <a class="theme-details-button" href="#/t?id=${randomTheme.id}">
              Ver Detalhes →
            </a>
          </div>
        `;
      }
    }, 1200);
  };
  
  // Expose to window for inline onclick
  window.drawRandomTheme = handleRandomTheme;
  
  randomThemeBtn?.addEventListener('click', handleRandomTheme);

  if (!isAdmin) return;

  // Publish seed button
  document.getElementById('publish-seed-btn')?.addEventListener('click', handlePublishSeed);
  document.getElementById('publish-seed-inline-btn')?.addEventListener('click', handlePublishSeed);

  // Create theme
  document.getElementById('create-theme-btn')?.addEventListener('click', () => {
    alert('Criação de tema será implementada em breve');
  });

  // Edit theme buttons
  document.querySelectorAll('.edit-theme-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const themeId = btn.dataset.themeId;
      alert(`Editar tema: ${themeId}\n\nEditor de temas será implementado em breve`);
    });
  });

  // Delete theme buttons
  document.querySelectorAll('.delete-theme-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const themeId = btn.dataset.themeId;
      
      if (confirm(`Deseja realmente excluir este tema?\n\nEsta ação não pode ser desfeita.`)) {
        try {
          const { deleteTheme } = await import('../services/firebase/repos/themesRepo.js');
          await deleteTheme(themeId);
          alert('Tema excluído com sucesso!');
        } catch (error) {
          console.error('Error deleting theme:', error);
          alert('Erro ao excluir tema. Verifique o console.');
        }
      }
    });
  });
}

async function handlePublishSeed() {
  const hasData = await hasThemes();
  
  const message = hasData 
    ? 'Já existem temas no banco. Deseja substituir pelos temas locais?'
    : 'Deseja publicar os 10 temas iniciais no banco de dados?';
  
  if (confirm(message)) {
    try {
      const localThemes = getAllThemes();
      await seedThemes(localThemes);
      alert(`✅ ${localThemes.length} temas publicados com sucesso!`);
    } catch (error) {
      console.error('Error seeding themes:', error);
      alert('Erro ao publicar temas. Verifique o console e suas permissões.');
    }
  }
}

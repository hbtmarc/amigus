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

  const storageKey = `amigus:participants:${themeId}`;
  let participants = [];
  let lastWinner = null;

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

  try {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      participants = JSON.parse(stored);
    }
  } catch (error) {
    console.warn('Failed to load participants from localStorage', error);
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
          <div class="flex justify-center gap-3 flex-wrap mt-6">
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

      <section class="product-section">
        <div class="product-section__content">
          <div class="flex items-center gap-3 mb-6">
            <span class="section-icon">🎲</span>
            <h2 class="product-section__title" style="margin: 0;">Participantes</h2>
          </div>
          <div class="card" style="padding: var(--space-8);">
            <div class="flex gap-3 flex-wrap" style="align-items: flex-end;">
              <ui-input id="participant-input" label="Adicionar participante" placeholder="Nome da pessoa" style="flex: 1; min-width: 200px;"></ui-input>
              <ui-button variant="secondary" size="md" id="add-participant-btn">➕ Adicionar</ui-button>
            </div>
            <div id="participants-list" class="flex gap-2 flex-wrap mt-6"></div>
            
            <div id="draw-container" class="draw-container mt-8">
              <div class="draw-box">
                <div class="draw-icon">🎯</div>
                <h3 class="draw-title">Pronto para o sorteio?</h3>
                <p class="draw-subtitle">Descubra a ordem completa dos jogadores!</p>
                <ui-button variant="primary" size="lg" id="draw-host-btn" onclick="window.drawParticipant && window.drawParticipant()" style="min-width: 240px; cursor: pointer;">
                  🎲 Sortear Ordem dos Jogadores
                </ui-button>
                <div id="draw-result" class="draw-result"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="product-section">
        <div class="product-section__content">
          <div class="flex items-center gap-3 mb-6">
            <span class="section-icon">💡</span>
            <h2 class="product-section__title" style="margin: 0;">O pitch</h2>
          </div>
          <p class="text-lg text-secondary">${theme.pitch}</p>
        </div>
      </section>

      <section class="product-section">
        <div class="product-section__content">
          <div class="flex items-center gap-3 mb-6">
            <span class="section-icon">📦</span>
            <h2 class="product-section__title" style="margin: 0;">O que você precisa</h2>
          </div>
          <ul class="product-list">
            ${theme.materials.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </section>

      <section class="product-section">
        <div class="product-section__content">
          <div class="flex items-center gap-3 mb-6">
            <span class="section-icon">⚖️</span>
            <h2 class="product-section__title" style="margin: 0;">Regras</h2>
          </div>
          <ul class="product-list">
            ${theme.rules.map(rule => `<li>${rule}</li>`).join('')}
          </ul>
        </div>
      </section>

      ${theme.hostScript && theme.hostScript.length ? `
        <section class="product-section">
          <div class="product-section__content">
            <div class="flex items-center gap-3 mb-6">
              <span class="section-icon">🎭</span>
              <h2 class="product-section__title" style="margin: 0;">Roteiro do anfitrião</h2>
            </div>
            <ul class="product-list">
              ${theme.hostScript.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </section>
      ` : ''}

      <section class="product-section">
        <div class="product-section__content">
          <div class="flex items-center gap-3 mb-6">
            <span class="section-icon">📋</span>
            <h2 class="product-section__title" style="margin: 0;">Passos</h2>
          </div>
          <ul class="product-list">
            ${theme.steps.map(step => `<li>${step.replace(/^\d+\.?\s*/, '')}</li>`).join('')}
          </ul>
        </div>
      </section>

      ${theme.prompts && theme.prompts.length ? `
        <section class="product-section">
          <div class="product-section__content">
            <div class="flex items-center gap-3 mb-6">
              <span class="section-icon">💬</span>
              <h2 class="product-section__title" style="margin: 0;">Prompts</h2>
            </div>
            <ul class="product-list">
              ${theme.prompts.map(prompt => `<li>${prompt}</li>`).join('')}
            </ul>
          </div>
        </section>
      ` : ''}

    </div>
  `;

  // Attach listeners
  if (editorMode && isAdmin) {
    document.getElementById('edit-theme-detail-btn')?.addEventListener('click', () => {
      alert(`Editar tema: ${theme.title}\n\nEditor será implementado em breve`);
    });
  }

  // Wait for web components to be ready
  setTimeout(() => {
    const input = document.getElementById('participant-input');
    const addBtn = document.getElementById('add-participant-btn');
    const listEl = document.getElementById('participants-list');
    const drawBtn = document.getElementById('draw-host-btn');
    const resultEl = document.getElementById('draw-result');

    console.log('Elements found:', { input, addBtn, listEl, drawBtn, resultEl });

  const saveParticipants = () => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(participants));
    } catch (error) {
      console.warn('Failed to save participants', error);
    }
  };

  const renderParticipants = () => {
    if (!listEl) return;
    listEl.innerHTML = participants.map((name) => `
      <ui-chip variant="outline" size="md">${name}</ui-chip>
    `).join('');
  };

  const handleAddParticipant = () => {
    const value = input?.value?.trim();
    if (!value) return;
    if (!participants.includes(value)) {
      participants.push(value);
      saveParticipants();
      renderParticipants();
    }
    if (input) input.value = '';
  };

  const handleDraw = () => {
    console.log('Draw button clicked! Participants:', participants);
    if (participants.length === 0) {
      if (resultEl) {
        resultEl.className = 'draw-result draw-result--error';
        resultEl.innerHTML = '⚠️ Adicione participantes antes de sortear.';
      }
      return;
    }
    
    // Animação de sorteio
    if (resultEl) {
      resultEl.className = 'draw-result draw-result--loading';
      resultEl.innerHTML = '🎲 Sorteando...';
    }
    
    setTimeout(() => {
      const order = [...participants].sort(() => Math.random() - 0.5);
      lastWinner = order[order.length - 1] || null;

      if (resultEl) {
        resultEl.className = 'draw-result draw-result--success';
        resultEl.innerHTML = `
          <div class="draw-winner" style="flex-direction: column; gap: var(--space-3);">
            <div class="flex items-center gap-3">
              <span class="draw-winner__icon">🎉</span>
              <div>
                <div class="draw-winner__label">Ordem dos Jogadores</div>
              </div>
            </div>
            <ol class="deck-list" style="margin: 0;">
              ${order.map(name => `<li>${name}</li>`).join('')}
            </ol>
          </div>
        `;
      }
    }, 1200);
  };

  // Expose to window for inline onclick
  window.drawParticipant = handleDraw;

  // Attach listeners
  addBtn?.addEventListener('click', handleAddParticipant);
  drawBtn?.addEventListener('click', handleDraw);
  
  // Also listen for Enter key on input
  input?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleAddParticipant();
    }
  });

    renderParticipants();
  }, 100);
}

export async function unmount() {
  // Cleanup
}

/**
 * Deck Page — Modo apresentação (slides)
 */

import { getState } from '../state/store.js';

let currentSlide = 0;
let slides = [];
let theme = null;
let keyHandler = null;
let touchStartX = 0;
let touchEndX = 0;

export async function mount(root, ctx) {
  const themeId = ctx.params.id;
  const state = getState();
  theme = state.data.themes.find(t => t.id === themeId);

  if (!theme) {
    root.innerHTML = `
      <div style="text-align: center; padding: var(--space-4xl) 0;">
        <h2>Tema não encontrado</h2>
        <ui-button variant="primary" onclick="window.location.hash='#/'" style="margin-top: var(--space-xl);">
          Voltar
        </ui-button>
      </div>
    `;
    return;
  }

  // Generate slides
  slides = generateSlides(theme);
  currentSlide = 0;

  // Render deck container
  root.innerHTML = `
    <div class="deck-container">
      <div class="deck-header">
        <a href="#/t?id=${theme.id}" class="link-arrow">Voltar</a>
        <div class="deck-progress">
          <span id="deck-current">1</span> / <span id="deck-total">${slides.length}</span>
        </div>
        <div class="flex gap-2">
          <ui-button variant="ghost" size="sm" id="deck-fullscreen">Tela cheia</ui-button>
          <ui-button variant="ghost" size="sm" id="deck-exit">Sair</ui-button>
        </div>
      </div>

      <div id="deck-card" class="deck-card reveal-scale"></div>

      <div class="deck-controls">
        <ui-button variant="secondary" size="lg" id="deck-prev" ${currentSlide === 0 ? 'disabled' : ''}>
          ← Anterior
        </ui-button>
        <ui-button variant="primary" size="lg" id="deck-next" ${currentSlide === slides.length - 1 ? 'disabled' : ''}>
          Próximo →
        </ui-button>
      </div>
    </div>
  `;

  // Render first slide
  renderSlide();

  // Attach event listeners
  attachDeckListeners(root);
}

export async function unmount() {
  // Remove keyboard listener
  if (keyHandler) {
    document.removeEventListener('keydown', keyHandler);
    keyHandler = null;
  }
}

function generateSlides(theme) {
  const generatedSlides = [];

  // Slide 1: Capa
  generatedSlides.push({
    type: 'cover',
    content: {
      title: theme.title,
      subtitle: theme.subtitle,
    }
  });

  // Slide 2: Objetivo
  generatedSlides.push({
    type: 'objective',
    content: {
      title: 'Objetivo',
      text: theme.pitch,
      tags: theme.vibeTags,
      duration: theme.durationMin,
    }
  });

  // Slide 3: Materiais
  generatedSlides.push({
    type: 'materials',
    content: {
      title: 'Materiais Necessários',
      items: theme.materials,
    }
  });

  // Slide 4: Regras
  generatedSlides.push({
    type: 'rules',
    content: {
      title: 'Regras',
      items: theme.rules,
    }
  });

  // Slides 5+: Roteiro (dividir em chunks de 4-5)
  const stepChunks = chunkArray(theme.steps, 5);
  stepChunks.forEach((chunk, i) => {
    generatedSlides.push({
      type: 'steps',
      content: {
        title: stepChunks.length > 1 ? `Roteiro (${i + 1}/${stepChunks.length})` : 'Roteiro',
        items: chunk,
      }
    });
  });

  // Slides: Prompts (dividir em chunks de 6)
  if (theme.prompts && theme.prompts.length > 0) {
    const promptChunks = chunkArray(theme.prompts, 6);
    promptChunks.forEach((chunk, i) => {
      generatedSlides.push({
        type: 'prompts',
        content: {
          title: promptChunks.length > 1 ? `Perguntas (${i + 1}/${promptChunks.length})` : 'Perguntas',
          items: chunk,
        }
      });
    });
  }

  // Slide final: Encerramento
  generatedSlides.push({
    type: 'closing',
    content: {
      title: 'Boa Noite!',
      text: 'Aproveitem o momento juntos',
    }
  });

  return generatedSlides;
}

function chunkArray(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

function renderSlide() {
  const card = document.getElementById('deck-card');
  const slide = slides[currentSlide];

  if (!card || !slide) return;

  let title = '';
  let content = '';

  switch (slide.type) {
    case 'cover':
      title = slide.content.title;
      content = `<p class="deck-card__content">${slide.content.subtitle}</p>`;
      break;

    case 'objective':
      title = slide.content.title;
      content = `
        <div class="deck-card__content">
          <p class="mb-6">${slide.content.text}</p>
          <div class="flex justify-center gap-2 flex-wrap mb-4">
            ${slide.content.tags.map(tag => `<ui-chip variant="accent" size="md">${tag}</ui-chip>`).join('')}
          </div>
          <p class="text-secondary">⏱ Duração: ${slide.content.duration} minutos</p>
        </div>
      `;
      break;

    case 'materials':
      title = slide.content.title;
      content = `
        <div class="deck-card__content">
          <ul class="product-list">
            ${slide.content.items.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      `;
      break;

    case 'rules':
      title = slide.content.title;
      content = `
        <div class="deck-card__content">
          <ul class="product-list">
            ${slide.content.items.map(rule => `<li>${rule}</li>`).join('')}
          </ul>
        </div>
      `;
      break;

    case 'steps':
      title = slide.content.title;
      content = `
        <div class="deck-card__content">
          <ul class="product-list">
            ${slide.content.items.map(step => `<li>${step}</li>`).join('')}
          </ul>
        </div>
      `;
      break;

    case 'prompts':
      title = slide.content.title;
      content = `
        <div class="deck-card__content grid-auto-fit">
          ${slide.content.items.map(prompt => `
            <div class="card" style="padding: var(--space-6); text-align: center;">
              <p class="text-secondary">${prompt}</p>
            </div>
          `).join('')}
        </div>
      `;
      break;

    case 'closing':
      title = slide.content.title;
      content = `
        <div class="deck-card__content">
          <p class="mb-6 text-secondary">${slide.content.text}</p>
          <ui-button variant="primary" size="lg" onclick="window.location.hash='#/'">
            Escolher Próxima Noite
          </ui-button>
        </div>
      `;
      break;
  }

  card.classList.remove('revealed');
  card.innerHTML = `
    <h2 class="deck-card__title">${title}</h2>
    ${content}
  `;

  requestAnimationFrame(() => {
    card.classList.add('revealed');
  });

  updateControls();
}

function updateControls() {
  const currentEl = document.getElementById('deck-current');
  const prevBtn = document.getElementById('deck-prev');
  const nextBtn = document.getElementById('deck-next');

  if (currentEl) {
    currentEl.textContent = currentSlide + 1;
  }

  if (prevBtn) {
    if (currentSlide === 0) {
      prevBtn.setAttribute('disabled', '');
    } else {
      prevBtn.removeAttribute('disabled');
    }
  }

  if (nextBtn) {
    if (currentSlide === slides.length - 1) {
      nextBtn.setAttribute('disabled', '');
    } else {
      nextBtn.removeAttribute('disabled');
    }
  }
}

function goToSlide(index) {
  if (index >= 0 && index < slides.length) {
    currentSlide = index;
    renderSlide();
  }
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

function attachDeckListeners(root) {
  // Button listeners
  root.querySelector('#deck-prev')?.addEventListener('click', prevSlide);
  root.querySelector('#deck-next')?.addEventListener('click', nextSlide);
  root.querySelector('#deck-exit')?.addEventListener('click', () => {
    window.location.hash = `#/t?id=${theme.id}`;
  });
  root.querySelector('#deck-fullscreen')?.addEventListener('click', toggleFullscreen);

  // Keyboard navigation
  keyHandler = (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'Escape') {
      window.location.hash = `#/t?id=${theme.id}`;
    }
  };
  document.addEventListener('keydown', keyHandler);

  // Touch/swipe support
  const container = root.querySelector('.deck-container');
  container?.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  container?.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });
}

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swipe left -> next
      nextSlide();
    } else {
      // Swipe right -> prev
      prevSlide();
    }
  }
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
}


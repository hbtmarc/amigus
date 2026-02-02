# REVITALIZAÇÃO VISUAL APPLE — Status

## ✅ CONCLUÍDO (Fundação do Design System)

### 1. Design Tokens (styles/tokens.css)
- ✅ Cores Apple marketing (canvas #F5F5F7, texto #1D1D1F #6E6E73, accent #0071E3)
- ✅ Font stack San Francisco: `-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display"`
- ✅ Tipografia fluida com `clamp()` (--text-hero: 40-80px, --text-5xl: 48-72px)
- ✅ Line heights Apple-like (tight 1.1, snug 1.2, relaxed 1.6)
- ✅ Letter spacing (tight -0.02em para headlines)
- ✅ Spacing generoso (space-1 a space-32, 4-128px)
- ✅ Shadows sutis (shadow-sm a shadow-xl, rgba(0,0,0,0.04-0.1))
- ✅ Border radius Apple (sm 8px, 2xl 24px, full 624px)
- ✅ Transitions suaves (fast 150ms, base 250ms, reveal 600ms)
- ✅ Focus ring (3px offset 2px, cor accent)
- ✅ Blur para glassmorphism (sm 8px, md 16px, lg 24px)

### 2. Base Styles (styles/base.css)
- ✅ Reset moderno com box-sizing
- ✅ Font smoothing antialiased (Apple-style)
- ✅ Smooth scroll com prefers-reduced-motion
- ✅ Tipografia hierárquica (h1-h6, hero-headline, section-headline, subheadline)
- ✅ Links com arrow (`.link-arrow::after { content: "→" }`)
- ✅ Focus ring Apple-style (outline 3px, offset 2px-4px)
- ✅ Forms com focus state (border-color + box-shadow accent-light)
- ✅ Containers (container, container-narrow, container-text)
- ✅ Sections responsivas (section, section-lg, section-sm)
- ✅ Accessibility (sr-only, skip-link, reduced motion)

### 3. Utilities (styles/utilities.css)
- ✅ **Reveal animations** (.reveal, .reveal-fade, .reveal-scale)
- ✅ Stagger delays (nth-child 1-6, 0-500ms)
- ✅ Display & Layout (flex, grid, grid-cols-1-4, grid-auto-fit)
- ✅ Spacing (mt-1 a mt-16, mb-1 a mb-16, gap-1 a gap-8)
- ✅ Text utilities (text-xs a text-4xl, font-normal a font-bold, text-center/left/right)
- ✅ Colors (text-primary/secondary/tertiary, bg-canvas/surface/accent)
- ✅ Borders & Radius (rounded-sm a rounded-full, border/border-light)
- ✅ Shadows (shadow-none a shadow-xl)
- ✅ **Hover microinteractions** (hover-lift, hover-scale)
- ✅ Responsive utilities (lg:, md:, sm:)
- ✅ Reduced motion support (desliga animações)

### 4. Sections (styles/sections.css) — Novo arquivo!
- ✅ **Hero Section** (hero, hero__tagline, hero__title, hero__subtitle, hero__ctas)
- ✅ **Themes Grid** (themes-grid, theme-card com hover lift, badge, meta, tags, footer)
- ✅ **How It Works** (how-it-works, steps com circle numbers, descriptions)
- ✅ **Participants** (participant-chip com hover scale)
- ✅ **Footer** (footer, footer__nav, footer__link, footer__copyright)
- ✅ **Product Page** (product-hero, product-section, product-list com bullets)
- ✅ **Deck Page** (deck-container, deck-header, deck-card, deck-controls touch-friendly)
- ✅ Totalmente responsivo (grid adapta 3→2→1 colunas, CTAs stack mobile)

### 5. Reveal Utility (src/utils/reveal.js) — Novo arquivo!
- ✅ `initRevealAnimations(root)` — IntersectionObserver com threshold 0.1
- ✅ `cleanupRevealAnimations(observer)` — disconnect
- ✅ Respeita `prefers-reduced-motion` (revela tudo imediatamente)
- ✅ rootMargin `-50px` (trigger antes de entrar no viewport)

### 6. Index.html
- ✅ Importado `styles/sections.css` no `<head>`

---

## ⏳ PENDENTE (Implementação das Páginas)

### 7. Web Components (src/components/ui-*.js)
**Precisa refatorar 6 componentes:**

#### ui-button.js
- [ ] Atualizar variants (primary, secondary, ghost) para novos tokens
- [ ] Hover: translateY(-1px) + shadow-lg em primary
- [ ] Focus ring: 3px offset 4px
- [ ] Size: touch-friendly (md >= 44px, lg >= 48px)
- [ ] Transition: var(--transition-base)

#### ui-card.js
- [ ] Border radius: var(--radius-2xl) = 24px
- [ ] Shadow: var(--shadow-sm) default, hover → var(--shadow-lg)
- [ ] Border: 1px solid var(--color-border-light)
- [ ] Hover: transform translateY(-4px)

#### ui-modal.js
- [ ] Backdrop: blur(16px) + rgba overlay
- [ ] Sheet: radius var(--radius-2xl), shadow-xl
- [ ] Animation: slide-up com ease-out

#### ui-input.js
- [ ] Focus: border-color accent + box-shadow 0 0 0 3px accent-light
- [ ] Radius: var(--radius-md)
- [ ] Padding: var(--space-3) var(--space-4)

#### ui-toast.js
- [ ] Radius: var(--radius-xl)
- [ ] Shadow: var(--shadow-lg)
- [ ] Animation: slide-in-right com bounce

#### ui-chip.js
- [ ] Pills: radius var(--radius-full)
- [ ] Variants: accent (accent-light bg + accent text)

---

### 8. Home Page (src/pages/home.js)
**Landing page Apple-style completa:**

```javascript
// Estrutura:
<div class="home-page">
  <!-- Hero -->
  <section class="hero">
    <p class="hero__tagline">Noites Temáticas</p>
    <h1 class="hero__title">NOITE</h1>
    <p class="hero__subtitle">Noites temáticas para 4 pessoas (2 casais)</p>
    <div class="hero__ctas">
      <ui-button variant="primary" href="#temas">Começar</ui-button>
      <ui-button variant="secondary" href="#como-funciona">Como funciona</ui-button>
    </div>
    <div class="hero__chips">
      <!-- Participants chips -->
    </div>
  </section>

  <!-- Themes Grid -->
  <section id="temas" class="themes-grid">
    <div class="themes-grid__header reveal">
      <h2 class="themes-grid__title">Conheça a família.</h2>
      <p class="themes-grid__subtitle">10 temas prontos...</p>
    </div>
    <div class="themes-grid__container">
      <!-- Theme cards com reveal + hover-lift -->
    </div>
  </section>

  <!-- How It Works -->
  <section id="como-funciona" class="how-it-works">
    <div class="how-it-works__header reveal">
      <h2>Como funciona</h2>
    </div>
    <div class="how-it-works__steps">
      <div class="step reveal">
        <div class="step__number">1</div>
        <h3 class="step__title">Escolha o tema</h3>
        <p class="step__description">...</p>
      </div>
      <!-- Steps 2 e 3 -->
    </div>
  </section>

  <!-- Participants -->
  <section class="participants reveal">
    <h3 class="participants__title">Quem participa</h3>
    <div class="participants__list">
      <!-- Participant chips -->
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer__content">
      <nav class="footer__nav">
        <a href="#temas" class="footer__link">Temas</a>
        <a href="#como-funciona" class="footer__link">Como funciona</a>
      </nav>
      <p class="footer__copyright">© 2026 NOITE</p>
    </div>
  </footer>
</div>
```

**Adicionar no mount():**
```javascript
import { initRevealAnimations } from '../utils/reveal.js';

export async function mount(root, ctx) {
  // ... render HTML ...
  
  // Init reveals
  const observer = initRevealAnimations(root);
  
  // Cleanup on unmount
  root._revealObserver = observer;
}

export async function unmount() {
  const { cleanupRevealAnimations } = await import('../utils/reveal.js');
  if (root._revealObserver) {
    cleanupRevealAnimations(root._revealObserver);
  }
}
```

---

### 9. App Shell (src/app-shell.js)
**Header sticky Apple-style:**

```html
<style>
  header {
    position: sticky;
    top: 0;
    z-index: var(--z-sticky);
    background: var(--color-surface);
    border-bottom: 1px solid var(--color-divider);
    transition: all var(--transition-base);
  }
  
  header.scrolled {
    box-shadow: var(--shadow-md);
    backdrop-filter: blur(var(--blur-md));
    background: rgba(255, 255, 255, 0.8);
  }
  
  .header__content {
    max-width: var(--container-max);
    margin: 0 auto;
    padding: var(--space-4) var(--container-padding);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .header__logo {
    font-size: var(--text-xl);
    font-weight: var(--font-bold);
    letter-spacing: var(--tracking-tight);
  }
  
  .header__nav {
    display: flex;
    gap: var(--space-6);
    align-items: center;
  }
  
  .header__link {
    color: var(--color-text-secondary);
    font-size: var(--text-base);
    transition: color var(--transition-fast);
  }
  
  .header__link:hover {
    color: var(--color-text);
  }
</style>

<header id="main-header">
  <div class="header__content">
    <a href="#/" class="header__logo">NOITE</a>
    <nav class="header__nav">
      <a href="#temas" class="header__link">Temas</a>
      <a href="#como-funciona" class="header__link">Como funciona</a>
      <!-- Firebase login/logout existente -->
      <ui-button variant="primary" size="sm">Entrar</ui-button>
    </nav>
  </div>
</header>
```

**JS para scroll behavior:**
```javascript
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
```

---

### 10. Theme Detail (src/pages/theme.js)
**Product page Apple-style:**

```html
<div class="product-hero">
  <h1 class="product-hero__title">${theme.title}</h1>
  <p class="product-hero__subtitle">${theme.subtitle}</p>
  <div class="product-hero__meta">
    <ui-chip>${theme.durationMin} min</ui-chip>
    ${theme.vibeTags.map(tag => `<ui-chip variant="accent">${tag}</ui-chip>`).join('')}
  </div>
</div>

<div class="product-section">
  <div class="container-narrow">
    <h2 class="product-section__title">O pitch</h2>
    <p class="text-lg text-secondary">${theme.pitch}</p>
  </div>
</div>

<div class="product-section">
  <div class="container-narrow">
    <h2 class="product-section__title">O que você precisa</h2>
    <ul class="product-list">
      ${theme.materials.map(m => `<li>${m}</li>`).join('')}
    </ul>
  </div>
</div>

<!-- Repeat para Rules, Host Script, Prompts -->

<div class="product-section" style="text-align: center;">
  <ui-button variant="primary" size="lg" href="#/deck?id=${theme.id}">
    Abrir Apresentação →
  </ui-button>
</div>
```

---

### 11. Deck (src/pages/deck.js)
**Full focus experience:**

```html
<div class="deck-container">
  <div class="deck-header">
    <a href="#/t?id=${themeId}" class="link-arrow">← Voltar</a>
    <div class="deck-progress">${currentSlide + 1} / ${totalSlides}</div>
    <ui-button variant="ghost" size="sm" id="close-deck">ESC</ui-button>
  </div>
  
  <div class="deck-card reveal-scale">
    <h2 class="deck-card__title">${currentCard.title}</h2>
    <p class="deck-card__content">${currentCard.content}</p>
  </div>
  
  <div class="deck-controls">
    <ui-button variant="secondary" size="lg" id="prev-btn" ${currentSlide === 0 ? 'disabled' : ''}>
      ← Anterior
    </ui-button>
    <ui-button variant="primary" size="lg" id="next-btn" ${currentSlide === totalSlides - 1 ? 'disabled' : ''}>
      Próximo →
    </ui-button>
  </div>
</div>
```

**Card transition:**
```javascript
function changeSlide(direction) {
  const card = document.querySelector('.deck-card');
  
  // Fade out
  card.classList.remove('revealed');
  
  setTimeout(() => {
    currentSlide += direction;
    renderCard();
    
    // Fade in
    setTimeout(() => card.classList.add('revealed'), 50);
  }, 300);
}
```

---

## 🎯 PRÓXIMOS PASSOS (Ordem Recomendada)

1. **Refatorar ui-button.js** (componente mais usado)
2. **Refatorar ui-card.js** (theme cards)
3. **Refatorar home.js** (landing page completa)
4. **Atualizar app-shell.js** (header sticky)
5. **Refatorar theme.js** (product page)
6. **Refatorar deck.js** (full focus)
7. **Refatorar ui-modal, ui-input, ui-toast** (menos críticos)
8. **Testar responsividade** (mobile, tablet, desktop)
9. **Testar reduced motion** (toggle no DevTools)
10. **Validar acessibilidade** (contraste, foco, targets >=44px)

---

## 📋 CHECKLIST DE ACEITE

### Visual Apple-like
- [ ] Tipografia San Francisco (-apple-system)
- [ ] Cores Apple (#F5F5F7, #1D1D1F, #0071E3)
- [ ] Shadows sutis (rgba 0.04-0.1)
- [ ] Border radius generoso (16-24px)
- [ ] Whitespace abundante (space-24, space-32)

### Layout
- [ ] Home é landing page (hero + grid + steps + footer)
- [ ] 3 rotas mantidas (#/, #/t, #/deck)
- [ ] Como funciona é seção, não rota
- [ ] Header sticky com blur
- [ ] Footer minimalista

### Componentes
- [ ] Botões: primary sólido, secondary neutro, ghost link
- [ ] Cards: hover lift + shadow
- [ ] Modals: backdrop blur + sheet
- [ ] Inputs: focus ring azul
- [ ] Chips: pills arredondados

### Animações
- [ ] Reveal on scroll (IntersectionObserver)
- [ ] Hover microinteractions (lift, scale)
- [ ] Deck card transitions
- [ ] Respeita prefers-reduced-motion

### Acessibilidade
- [ ] Focus ring visível (3px, offset 2-4px)
- [ ] Contraste suficiente (WCAG AA)
- [ ] Touch targets >= 44px
- [ ] Texto legível (min 16px)
- [ ] Reduced motion support

### Originalidade
- [ ] Sem imagens da Apple
- [ ] Sem textos da Apple
- [ ] Sem ícones da Apple
- [ ] SVGs abstratos próprios (opcional)
- [ ] Gradients simples (opcional)

---

## 💡 DICA: TESTE RÁPIDO

Abra o projeto e compare visualmente com apple.com/br/mac:

```bash
python3 -m http.server 8080
# Abra http://localhost:8080
# Abra https://www.apple.com/br/mac/ em outra aba
```

**O que observar:**
- Tipografia semelhante (pesada, espaçada)
- Whitespace generoso
- Cards com sombras sutis
- Hover states discretos
- Scroll suave com reveals
- Header sticky clean

Se o projeto "sentir" como Apple (clean, premium, light), está certo! ✅

/**
 * Playground Page — Showcase all components
 */

import { showToast } from '../components/ui-toast.js';

export async function mount(root, ctx) {
  root.innerHTML = `
    <div class="playground-page">
      <h1 class="mb-md">Playground</h1>
      <p class="text-secondary mb-xl">Demonstração de todos os componentes do sistema</p>
      
      <!-- Buttons -->
      <section class="mb-xl">
        <h2 class="mb-md">Buttons</h2>
        <div class="flex gap-md flex-wrap">
          <ui-button variant="primary">Primary</ui-button>
          <ui-button variant="secondary">Secondary</ui-button>
          <ui-button variant="ghost">Ghost</ui-button>
          <ui-button variant="danger">Danger</ui-button>
          <ui-button variant="primary" disabled>Disabled</ui-button>
          <ui-button variant="primary" loading>Loading</ui-button>
        </div>
        
        <h3 class="mt-lg mb-md">Sizes</h3>
        <div class="flex gap-md items-center">
          <ui-button size="sm">Small</ui-button>
          <ui-button size="md">Medium</ui-button>
          <ui-button size="lg">Large</ui-button>
        </div>
      </section>

      <!-- Cards -->
      <section class="mb-xl">
        <h2 class="mb-md">Cards</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
          <ui-card>
            <div slot="header">Card com Header</div>
            <p>Este é o corpo do card com conteúdo.</p>
          </ui-card>
          
          <ui-card>
            <div slot="header">Card Completo</div>
            <p>Card com header, body e footer.</p>
            <div slot="footer" class="flex gap-sm">
              <ui-button variant="primary" size="sm">Confirmar</ui-button>
              <ui-button variant="ghost" size="sm">Cancelar</ui-button>
            </div>
          </ui-card>

          <ui-card>
            <p>Card sem header, apenas body.</p>
          </ui-card>
        </div>
      </section>

      <!-- Inputs -->
      <section class="mb-xl">
        <h2 class="mb-md">Inputs</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
          <ui-input 
            label="Nome" 
            placeholder="Digite seu nome"
            hint="Campo obrigatório"
          ></ui-input>
          
          <ui-input 
            label="Email" 
            type="email"
            placeholder="seu@email.com"
          ></ui-input>
          
          <ui-input 
            label="Com erro" 
            error="Este campo está inválido"
            value="valor errado"
          ></ui-input>

          <ui-input 
            label="Senha" 
            type="password"
            placeholder="••••••••"
            required
          ></ui-input>
        </div>
      </section>

      <!-- Modal -->
      <section class="mb-xl">
        <h2 class="mb-md">Modal</h2>
        <ui-button id="open-modal-btn">Abrir Modal</ui-button>
        
        <ui-modal id="demo-modal" title="Modal de Demonstração">
          <p>Este é um modal com Shadow DOM.</p>
          <p>Pressione ESC ou clique fora para fechar.</p>
          <div slot="footer" class="flex gap-md justify-end">
            <ui-button variant="ghost" id="modal-cancel">Cancelar</ui-button>
            <ui-button variant="primary" id="modal-confirm">Confirmar</ui-button>
          </div>
        </ui-modal>
      </section>

      <!-- Toasts -->
      <section class="mb-xl">
        <h2 class="mb-md">Toasts</h2>
        <div class="flex gap-md flex-wrap">
          <ui-button id="toast-success">Success Toast</ui-button>
          <ui-button id="toast-error" variant="danger">Error Toast</ui-button>
          <ui-button id="toast-warning" variant="secondary">Warning Toast</ui-button>
          <ui-button id="toast-info" variant="ghost">Info Toast</ui-button>
        </div>
      </section>

      <!-- Typography -->
      <section class="mb-xl">
        <h2 class="mb-md">Typography</h2>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>Parágrafo normal com <a href="#">link</a> e texto.</p>
        <p class="text-secondary">Texto secundário</p>
        <p class="text-tertiary">Texto terciário</p>
      </section>

      <!-- Colors -->
      <section class="mb-xl">
        <h2 class="mb-md">Colors</h2>
        <div class="flex gap-md flex-wrap">
          <div style="width: 100px; height: 100px; background: var(--color-accent); border-radius: var(--radius-md);"></div>
          <div style="width: 100px; height: 100px; background: var(--color-success); border-radius: var(--radius-md);"></div>
          <div style="width: 100px; height: 100px; background: var(--color-warning); border-radius: var(--radius-md);"></div>
          <div style="width: 100px; height: 100px; background: var(--color-error); border-radius: var(--radius-md);"></div>
        </div>
      </section>
    </div>
  `;

  // Attach event listeners
  attachPlaygroundListeners();
}

export async function unmount() {
  // Cleanup
}

function attachPlaygroundListeners() {
  // Modal
  const openModalBtn = document.getElementById('open-modal-btn');
  const modal = document.getElementById('demo-modal');
  const modalCancel = document.getElementById('modal-cancel');
  const modalConfirm = document.getElementById('modal-confirm');

  openModalBtn?.addEventListener('click', () => modal?.open());
  modalCancel?.addEventListener('click', () => modal?.close());
  modalConfirm?.addEventListener('click', () => {
    showToast('Modal confirmado!', 'success');
    modal?.close();
  });

  // Toasts
  document.getElementById('toast-success')?.addEventListener('click', () => {
    showToast('Operação realizada com sucesso!', 'success');
  });

  document.getElementById('toast-error')?.addEventListener('click', () => {
    showToast('Ocorreu um erro!', 'error');
  });

  document.getElementById('toast-warning')?.addEventListener('click', () => {
    showToast('Atenção: verifique os dados', 'warning');
  });

  document.getElementById('toast-info')?.addEventListener('click', () => {
    showToast('Esta é uma informação', 'info');
  });
}

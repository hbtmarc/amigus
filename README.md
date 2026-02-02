# NOITE — Noites Temáticas

SPA moderna e minimalista para organizar noites temáticas entre amigos. Design Apple-like, sem frameworks, sem bundlers.

**Agora com Firebase**: autenticação Google + banco de dados em tempo real.

## 🎯 O que é?

Um hub de **10 temas de noites** já prontos para 4 pessoas (2 casais):
- Noite de Jogos
- Noite do Administrador
- Noite de PowerPoint
- Noite sem Celular
- Noite sem Estranhos
- Noite: Explica o que você faz no trabalho
- Noite do Projeto Paralelo
- Noite de Culinária Cooperativa
- Noite Cultural
- Noite de Debates

Cada tema inclui: materiais, regras, roteiro completo, perguntas e um **modo apresentação** interativo.

## 🏗️ Arquitetura

- **ES Modules nativos** — Zero build, imports diretos no browser
- **Hash Routing** — Compatível com GitHub Pages (`#/`, `#/t?id=X`, `#/deck?id=X`)
- **Web Components** — Shadow DOM para UI kit
- **Design Apple-like** — Tipografia system-ui, cores claras, sombras sutis
- **Firebase** — Auth (Google) + Realtime Database (CRUD em tempo real)

## � Firebase Integration

### Features
- ✅ Autenticação Google (popup)
- ✅ Temas em tempo real (RTDB)
- ✅ Participantes editáveis
- ✅ Modo editor (apenas admin)
- ✅ Seed inicial de temas
- ✅ Security rules (read público, write admin)

### Setup Firebase

**Passo 1: Console Firebase**

1. Acesse [Firebase Console](https://console.firebase.google.com)
2. Projeto: **amigus-marc35**

**Passo 2: Habilitar Authentication**

1. **Authentication** → **Sign-in method**
2. Habilite **Google**
3. **Authorized domains**: adicione
   - `localhost`
   - Seu domínio GitHub Pages (ex: `usuario.github.io`)

**Passo 3: Configurar Realtime Database**

1. **Realtime Database** → criar banco (se não existir)
2. **Rules** → cole o conteúdo de `/firebase/rtdb.rules.json`
3. **Publish**

**Passo 4: Tornar-se Admin**

1. Faça login no app (botão "Entrar")
2. Console Firebase → **Realtime Database** → **Data**
3. Adicione: `/admins/{SEU_UID}: true`

Para descobrir seu UID: olhe o console do navegador após login.

**Passo 5: Publicar Seed**

1. Ative "Editor Mode" (botão no header)
2. Clique em "Publicar seed no banco"
3. Os 10 temas serão enviados ao RTDB

📖 **Instruções detalhadas**: veja [/firebase/README.md](firebase/README.md)

## �🚀 Como rodar localmente

```bash
python3 -m http.server 8080
```

Abra: `http://localhost:8080`

## � Autenticação & Permissões

**Modo Público (sem login)**
- ✅ Ver todos os temas
- ✅ Ver detalhes
- ✅ Usar modo apresentação
- ❌ Editar/criar/excluir

**Modo Admin (com login + admin)**
- ✅ Tudo do modo público
- ✅ Ativar "Editor Mode"
- ✅ Publicar seed inicial
- ✅ Criar/editar/excluir temas
- ✅ Editar participantes

**Como funciona:**
- Login via popup do Google
- Admin verificado em `/admins/{uid}` no RTDB
- Editor Mode é um toggle (botão no header)
- Security rules impedem escrita não-autorizada

## �📦 Publicar no GitHub Pages

1. Commit e push do código
2. Vá em **Settings** → **Pages**
3. Source: **Deploy from branch** → `main` → `/root`
4. Salvar
5. Adicione o domínio em **Firebase Console** → **Authentication** → **Authorized domains**

GitHub Pages serve o `index.html` e o hash routing funciona perfeitamente.

## 🗺️ Rotas

- `#/` — Home (lista de temas)
- `#/t?id=<themeId>` — Detalhes do tema
- `#/deck?id=<themeId>` — Modo apresentação (slides)
- `#/playground` — Componentes de UI (dev only)

## 📂 Estrutura

```
/styles          → Tokens, base, utilities, components (Apple-like light)
/src
  /config        → firebase-config.js
  /services
    /firebase
      sdk.js           → Firebase ESM imports (v10.7.0)
      init.js          → Firebase app/auth/db
      auth.js          → Login/logout/observeAuth
      rtdb.js          → CRUD helpers
      /repos
        adminRepo.js   → isAdmin()
        themesRepo.js  → CRUD de temas/participantes
  /data          → themes.js (10 temas — fallback local)
  /state         → store.js (auth, data, ui)
  /utils         → dom.js, events.js
  /components    → ui-button, ui-card, ui-chip, ui-divider, ui-toast, ui-modal, ui-input
  /pages         → home, theme, deck, playground
  main.js        → Bootstrap + Firebase listeners
  router.js      → Hash routing
  app-shell.js   → Header + login/logout/editor toggle
/assets          → (vazio)
/data            → seeds.json (vazio)
/firebase
  rtdb.rules.json → Security rules
  README.md       → Instruções de setup
```

## 🎨 Design System

- **Cores**: Fundo #F5F5F7, Cards brancos, Accent #0071E3
- **Tipografia**: system-ui, -apple-system
- **Spacing**: Grid de 8px
- **Radius**: 16–20px
- **Sombras**: Muito sutis (2 níveis)
- **Motion**: Transições discretas (150–220ms)

## 🎮 Modo Apresentação (Deck)

- Navegação: ← → (teclado), Swipe (mobile), Botões
- ESC para sair
- Fullscreen opcional
- Slides gerados automaticamente do conteúdo do tema
- Indicador de progresso

## ✨ Componentes Web

- `<ui-button>` — Variants: primary, secondary, ghost, danger
- `<ui-card>` — Slots: header, body, footer
- `<ui-chip>` — Tags e badges (6 variants)
- `<ui-divider>` — Separador sutil
- `<ui-input>` — Label, hint, error
- `<ui-modal>` — ESC, click outside
- `<ui-toast>` — Notificações auto-dismiss

## 🧪 Testar

### Modo Público (sem login)

```bash
# Home
http://localhost:8080#/

# Detalhe de um tema
http://localhost:8080#/t?id=noite-jogos

# Modo apresentação
http://localhost:8080#/deck?id=noite-jogos

# Playground
http://localhost:8080#/playground
```

### Modo Admin

1. Clique em "Entrar" no header
2. Faça login com Google
3. No Console Firebase, adicione seu UID em `/admins/{uid}: true`
4. Recarregue a página
5. Clique em "Editar" no header (ativa Editor Mode)
6. Publique seed, edite ou delete temas

### Testar RTDB em Tempo Real

1. Abra o app em 2 navegadores/abas
2. Faça login como admin em um
3. Edite/delete um tema
4. Veja a atualização instantânea no outro navegador

## 🔒 Security

- **Leitura pública**: qualquer pessoa pode ver temas
- **Escrita restrita**: apenas admins (via `/admins/{uid}`)
- **Admins gerenciados manualmente**: sem interface de promoção
- **Popup de login**: requer autorização do usuário

## 🛠️ Desenvolvimento

**Adicionar novo tema:**
1. Login como admin
2. Editor Mode ON
3. "Criar Tema" (em breve)
4. Ou edite `/src/data/themes.js` e republique seed

**Estrutura de dados (RTDB):**
```javascript
{
  id: "noite-exemplo",
  title: "Título",
  subtitle: "Subtítulo",
  pitch: "Descrição longa...",
  durationMin: 120,
  vibeTags: ["Tag1", "Tag2"],
  materials: ["Item 1", "Item 2"],
  rules: ["Regra 1", "Regra 2"],
  steps: ["Passo 1", "Passo 2"],
  hostScript: ["Fala 1", "Fala 2"],
  prompts: ["Pergunta 1", "Pergunta 2"],
  createdAt: 1234567890,
  updatedAt: 1234567890
}
```

## 🐛 Troubleshooting

**"Firebase: Error (auth/popup-blocked)"**
→ Permita popups no navegador

**"PERMISSION_DENIED"**
→ Verifique `/admins/{uid}` e rules do RTDB

**Temas não carregam**
→ Publique o seed ou verifique console

**Editor Mode não aparece**
→ Apenas admins veem. Verifique `state.auth.isAdmin` no console

## 📝 Próximos Passos

- [ ] Editor de temas (modal com formulário)
- [ ] Editor de participantes
- [ ] Criar tema novo (do zero)
- [ ] Exportar apresentação como PDF
- [ ] PWA (offline-first)
- [ ] Analytics de uso

## 📝 Licença

MIT

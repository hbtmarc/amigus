# Firebase Setup — NOITE

## 1. Configurar Authentication

1. Acesse [Firebase Console](https://console.firebase.google.com)
2. Selecione o projeto **amigus-marc35**
3. Vá em **Authentication** → **Sign-in method**
4. Habilite **Google** como provider
5. Em **Authorized domains**, adicione:
   - `localhost`
   - Seu domínio do GitHub Pages (ex: `usuario.github.io`)

## 2. Configurar Realtime Database

1. Vá em **Realtime Database**
2. Se não existir, crie um banco
3. Clique em **Rules** e cole o conteúdo de `rtdb.rules.json`:

```json
{
  "rules": {
    "v1": {
      "themes": {
        ".read": true,
        "$themeId": {
          ".write": "root.child('admins').child(auth.uid).val() === true"
        }
      },
      "participants": {
        ".read": true,
        ".write": "root.child('admins').child(auth.uid).val() === true"
      }
    },
    "admins": {
      "$uid": {
        ".read": "auth != null",
        ".write": false
      }
    }
  }
}
```

4. Clique em **Publish**

## 3. Tornar-se Admin

1. Faça login no app pela primeira vez (botão "Entrar")
2. No Console Firebase, vá em **Realtime Database** → **Data**
3. Clique em `+` e crie o nó:
   - Path: `/admins/{SEU_UID}`
   - Value: `true`

Para descobrir seu UID:
- Abra o console do navegador após login
- O UID aparece no log ou em `state.auth.user.uid`

Exemplo:
```
/admins
  /abc123xyz: true
```

## 4. Publicar Seed Inicial

1. Após virar admin, recarregue a página
2. Ative o "Editor Mode" (botão no header)
3. Na home, clique em "Publicar seed no banco"
4. Isso enviará os 10 temas locais para o Realtime Database

## 5. Observações

### Popup vs Redirect
O app usa `signInWithPopup` (popup) ao invés de `signInWithRedirect` para melhor UX. Certifique-se de que o navegador permite popups.

### Security Rules
As rules permitem:
- **Leitura pública** de temas e participantes
- **Escrita apenas para admins** (verificado via `/admins/{uid}`)
- Admins são gerenciados manualmente no Console (sem interface de promoção)

### Estrutura do Banco

```
/v1
  /themes
    /noite-jogos
      id: "noite-jogos"
      title: "Noite de Jogos"
      subtitle: "..."
      pitch: "..."
      durationMin: 180
      vibeTags: [...]
      materials: [...]
      rules: [...]
      steps: [...]
      hostScript: [...]
      prompts: [...]
      createdAt: 1234567890
      updatedAt: 1234567890
    /noite-powerpoint
      ...
  /participants
    0: "Luiza"
    1: "Marcelino"
    2: "Joyce"
    3: "Matheus"

/admins
  /{uid}: true
```

## Troubleshooting

**Erro: "Firebase: Error (auth/popup-blocked)"**
- Permita popups no navegador para este site

**Erro: "PERMISSION_DENIED"**
- Verifique se você está logado
- Verifique se seu UID está em `/admins/{uid}: true`
- Verifique se as rules foram publicadas corretamente

**Temas não aparecem**
- Verifique se o seed foi publicado
- Abra o Console e veja se `/v1/themes` tem dados
- Olhe o console do navegador para erros

**Editor Mode não aparece**
- Apenas admins veem o botão "Editar"
- Verifique se `state.auth.isAdmin === true` no console

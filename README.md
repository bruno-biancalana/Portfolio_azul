# Portfolio Azul 🌐

Meu portfólio pessoal - Uma vitrine dos meus projetos e habilidades em desenvolvimento web.

🔗 **[Acesse o portfólio](https://bruno-biancalana-dev.netlify.app/)**

---

## 📋 Índice

- [Sobre](#sobre)
- [Tecnologias Usadas](#-tecnologias-usadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Setup e Instalação](#-setup-e-instalação)
- [Como Usar](#-como-usar)
- [Deploy](#-deploy)
- [Segurança](#-segurança)
- [Como Contribuir](#-como-contribuir)
- [Contato](#-contato)

---

## Sobre

Este é um portfólio responsivo e moderno desenvolvido com HTML, CSS, SCSS e JavaScript. O projeto showcasa meus melhores trabalhos, habilidades técnicas e fornece uma maneira fácil para potenciais clientes e empregadores entrarem em contato comigo.

---

## 🛠 Tecnologias Usadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos e layout
- **SCSS** - Preprocessador CSS para melhor organização
- **JavaScript (Vanilla)** - Interatividade e dinâmica
- **SheetMonkey** - Integração com Google Sheets (com proteção de segurança)
- **Netlify** - Deploy e hospedagem

---

## 📁 Estrutura do Projeto

```
Portfolio_azul/
├── index.html              # Página principal
├── style.css              # Estilos CSS compilados
├── style.scss             # Estilos SCSS (origem)
├── script.js              # Scripts JavaScript
├── assets/                # Arquivos de mídia
│   ├── images/           # Imagens do portfólio
│   ├── icons/            # Ícones
│   └── fonts/            # Fontes customizadas
├── .env.example           # Exemplo de variáveis de ambiente
├── .gitignore            # Arquivos ignorados pelo Git
├── README.md             # Este arquivo
└── package.json          # Dependências do projeto (se aplicável)
```

### Descrição das Pastas

- **assets/** - Contém todos os arquivos estáticos (imagens, ícones, fontes)
- **Arquivo raiz** - HTML, CSS/SCSS, JavaScript e configurações

---

## 🚀 Setup e Instalação

### Pré-requisitos

- Git instalado
- Um editor de código (VS Code recomendado)
- Navegador atualizado

### Passos

1. **Clone o repositório**
   ```bash
   git clone https://github.com/bruno-biancalana/Portfolio_azul.git
   cd Portfolio_azul
   ```

2. **Configure variáveis de ambiente**
   ```bash
   cp .env.example .env
   ```
   Adicione suas chaves de API no arquivo `.env`

3. **Abra o projeto**
   - Abra `index.html` no navegador, ou
   - Use uma extensão como "Live Server" no VS Code

---

## 💻 Como Usar

### Localmente

1. Abra o arquivo `index.html` no seu navegador
2. Navegue pela página e interaja com os elementos
3. Use o formulário de contato para enviar mensagens

### Personalizar

- **Edite `index.html`** - Altere conteúdo e estrutura
- **Modifique `style.scss`** - Customize cores, fontes e layout
- **Atualize `script.js`** - Adicione novas funcionalidades

---

## �배 Deploy

### Deploy no Netlify (Recomendado)

1. **Conecte seu repositório**
   - Acesse [netlify.com](https://netlify.com)
   - Clique em "New site from Git"
   - Selecione seu repositório GitHub

2. **Configure build settings**
   - Build command: (deixe vazio para projeto estático)
   - Publish directory: `.` (raiz do projeto)

3. **Configure variáveis de ambiente**
   - Na seção "Environment variables", adicione suas chaves de API

4. **Deploy automático**
   - Cada push para `master` faz deploy automático

### Deploy em outras plataformas

- **GitHub Pages** - Ative em Settings > Pages
- **Vercel** - Importar projeto do Git
- **Firebase** - `firebase deploy`

---

## 🔒 Segurança

### ⚠️ Importante

#### 1. Arquivo de Verificação do Google

**Problema:** Arquivo `google727e1df49335357d.html` pode expor informações sensíveis.

**Solução:**
```bash
# Adicione ao .gitignore
echo "google*.html" >> .gitignore

# Adicione o arquivo na raiz do servidor (via Netlify)
# Upload via Netlify UI ou use _redirects
```

#### 2. API SheetMonkey Protegida

**Problema:** API exposta no frontend pode ser abusada.

**Solução recomendada:**

```javascript
// ❌ EVITE isto:
const API_KEY = 'sua-chave-pública';

// ✅ FAÇA isto:
// Use variáveis de ambiente
const API_KEY = process.env.SHEETMONKEY_API_KEY;

// Ou use um backend intermediário
fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(formData)
});
```

**Arquivo `.env` (exemplo):**
```
SHEETMONKEY_API_KEY=sua-chave-segura
GOOGLE_VERIFICATION_ID=seu-id
```

**Arquivo `.env.example` (sem valores sensíveis):**
```
SHEETMONKEY_API_KEY=
GOOGLE_VERIFICATION_ID=
```

---

## 🤝 Como Contribuir

1. **Faça um Fork** do projeto
2. **Crie uma branch** com sua feature (`git checkout -b feature/nova-feature`)
3. **Commit suas mudanças** (`git commit -m 'Add: nova feature'`)
4. **Push para a branch** (`git push origin feature/nova-feature`)
5. **Abra um Pull Request**

### Padrão de Commits

- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `docs:` - Documentação
- `style:` - Formatação
- `refactor:` - Refatoração
- `chore:` - Tarefas administrativas

---

## 📞 Contato

- **Portfolio:** [bruno-biancalana-dev.netlify.app](https://bruno-biancalana-dev.netlify.app/)
- **GitHub:** [@bruno-biancalana](https://github.com/bruno-biancalana)
- **Email:** Use o formulário no portfólio

---

## 📄 Licença

Este projeto é de uso pessoal e educacional.

---

**Última atualização:** Maio de 2026

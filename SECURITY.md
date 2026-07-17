# 🔒 Guia de Segurança

## Práticas de Segurança Implementadas

### 1. Proteção do formulário de contato

- O navegador envia mensagens para uma função serverless do próprio site.
- O endpoint do SheetMonkey fica na variável `SHEETMONKEY_API_URL` do Netlify e não é enviado ao navegador.
- A função valida origem, método, tipo e tamanho da requisição e os campos recebidos.
- Um campo honeypot e uma limitação básica por IP reduzem spam automatizado.
- A limitação em memória é complementar e não substitui uma solução persistente ou CAPTCHA em cenários de abuso intenso.

### 2. Proteção de Arquivos de Verificação

- Arquivos como `google*.html` não são commitados
- Upload feito diretamente via Netlify ou servidor

### 3. Validação de formulário

- Validação no frontend (HTML5)
- Validação na função serverless antes do encaminhamento
- Respostas genéricas, sem expor configuração interna

## Relatando Vulnerabilidades

Se encontrar uma vulnerabilidade de segurança:

1. **NÃO abra uma issue pública**
2. Use o contato privado disponível no perfil do GitHub
3. Descreva a vulnerabilidade em detalhes
4. Aguarde confirmação e resposta

---

## Checklist de Segurança

- [x] Variáveis de ambiente configuradas
- [x] `.gitignore` contém arquivos sensíveis
- [x] Endpoint externo armazenado em variável de ambiente do Netlify
- [x] Sem credenciais no código
- [x] HTTPS habilitado no deploy
- [x] Validação de origem e limitação básica por IP
- [ ] Adotar armazenamento persistente ou CAPTCHA se o volume de abuso justificar


# 🔒 Guia de Segurança

## Práticas de Segurança Implementadas

### 1. Proteção de Chaves de API

- **Variáveis de ambiente** armazenam dados sensíveis
- **Arquivo `.env`** não é versionado (adicionado ao `.gitignore`)
- **`.env.example`** fornece template sem valores reais

### 2. Proteção de Arquivos de Verificação

- Arquivos como `google*.html` não são commitados
- Upload feito diretamente via Netlify ou servidor

### 3. Validação de Formulário

- Validação no frontend (HTML5)
- Validação no backend (quando aplicável)
- Rate limiting para prevenir spam

## Relatando Vulnerabilidades

Se encontrar uma vulnerabilidade de segurança:

1. **NÃO abra uma issue pública**
2. Envie um email para: bruno@seu-email.com
3. Descreva a vulnerabilidade em detalhes
4. Aguarde confirmação e resposta

---

## Checklist de Segurança

- [x] Variáveis de ambiente configuradas
- [x] `.gitignore` contém arquivos sensíveis
- [x] API protegida com variáveis de ambiente
- [x] Sem credenciais no código
- [x] HTTPS habilitado no deploy
- [ ] Rate limiting implementado (TODO)
- [ ] CORS configurado corretamente (TODO)


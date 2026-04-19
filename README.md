# GitHub User Explorer

Aplicação front-end desenvolvida para consumir a API do GitHub, permitindo buscar usuários e visualizar seus repositórios mais populares com ordenação e navegação detalhada.


## Demonstração

- Vercel: https://desafio-front-alpha.vercel.app
- cPanel: https://helder.dev.br 


## Tecnologias utilizadas

- React
- TypeScript
- Vite
- Axios
- React Router
- Bootstrap


## Funcionalidades

- Busca de usuários do GitHub
- Exibição de perfil do usuário
  - Avatar
  - Bio
  - Seguidores e seguindo
  - E-mail (quando disponível)
- Listagem de repositórios
- Ordenação por:
  - Mais estrelas
  - Menos estrelas
  - Nome (A-Z / Z-A)
- Página de detalhes do repositório
  - Nome
  - Descrição
  - Linguagem
  - Estrelas
  - Forks
  - Issues abertas
  - Link para o GitHub
- Navegação entre páginas
- Página 404 para rotas inválidas

---

## Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/apolohelder/desafioFront.git

cd desafioFront
```
### 2. Instale as dependências
```bash
npm install
```
### 3. Configure as variáveis de ambiente

Crie um arquivo .env na raiz:

### 4. Execute o projeto

```bash
npm run dev

http://localhost:5173/
```

## Build para produção

### Deploy Vercel

Deploy automático via integração com GitHub

### cPanel

1. Execute o build:

```bash
npm run build
```

2. Envie o conteúdo da pasta `/dist` para:


```bash
public_html
```

3. Crie o arquivo .htaccess na pasta `public_html` com as informações:

```bash
RewriteEngine On
RewriteBase /

RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## Decisões técnicas

- Uso de React Router para navegação SPA
- Consumo da API com Axios
- Separação de responsabilidades:
  - `components`
  - `constants`
  - `hooks`
  - `pages`
  - `routes`
  - `services`
  - `types`
- Uso de TypeScript para tipagem segura
- Tratamento de erros e estados de loading
- Ordenação otimizada com useMemo

## Autor

Desenvolvido por HELDER SILVA


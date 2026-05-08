# Frontend Mentor Projects Hub

Hub centralizado com desafios do Frontend Mentor desenvolvidos com HTML, CSS e JavaScript puro.

O objetivo deste repositório é reunir os projetos em um único lugar, com uma homepage principal na raiz funcionando como portfólio e ponto de navegação para cada desafio. Cada projeto permanece isolado em sua própria pasta, com seus próprios arquivos e caminhos relativos, permitindo deploy estático em um único projeto na Vercel.

## Stack

- HTML5
- CSS3
- JavaScript Vanilla
- Deploy estático na Vercel

## Como está organizado

Cada desafio fica dentro de sua própria pasta e pode ser acessado diretamente por rota:

- `/blog-preview-card`
- `/column-preview-card`
- `/nft-preview-card`
- `/order-summary-component`
- `/pagina-de-receitas`
- `/perfil-links-sociais`
- `/price-grid-component`
- `/product-preview-card`
- `/qrcode-component`
- `/stats-preview-card`
- `/summary-component`

A raiz do projeto contém a homepage do hub:

- [index.html](/Users/gabrielbassouto/Documents/frontendmentor-projects/index.html)
- [style.css](/Users/gabrielbassouto/Documents/frontendmentor-projects/style.css)
- [script.js](/Users/gabrielbassouto/Documents/frontendmentor-projects/script.js)

## Estrutura

```text
frontendmentor-projects/
├── index.html
├── style.css
├── script.js
├── README.md
├── blog-preview-card/
├── column-preview-card/
├── nft-preview-card/
├── order-summary-component/
├── pagina-de-receitas/
├── perfil-links-sociais/
├── price-grid-component/
├── product-preview-card/
├── qrcode-component/
├── stats-preview-card/
└── summary-component/
```

## Homepage do Hub

A homepage principal foi criada para funcionar como um portfólio estático:

- layout responsivo
- visual dark mode
- cards com preview dos projetos
- botão para visualizar cada projeto
- botão para abrir a pasta correspondente no GitHub
- geração dos cards via JavaScript a partir de uma lista central de projetos

## Como adicionar um novo projeto

1. Crie uma nova pasta na raiz com um nome sem espaços, por exemplo `advice-generator`.
2. Garanta que o projeto possua pelo menos um `index.html`.
3. Ajuste os caminhos internos de CSS, JS e assets de forma relativa à própria pasta.
4. Adicione o novo item na lista do arquivo [script.js](/Users/gabrielbassouto/Documents/frontendmentor-projects/script.js).
5. Se quiser, adicione também um `preview.jpg` ou imagem equivalente para exibição no card do hub.

## Rodando localmente

Como este é um projeto estático, você pode abrir a raiz com qualquer servidor simples. Exemplos:

```bash
python3 -m http.server 8000
```

ou usar a extensão Live Server no editor.

## Deploy na Vercel

Para subir na Vercel:

1. Envie este repositório para o GitHub.
2. Importe o repositório na Vercel.
3. Configure como projeto estático.
4. Não é necessário comando de build.
5. Defina a pasta de saída como a raiz do repositório, se a interface pedir.

Depois disso:

- a homepage ficará disponível em `/`
- cada projeto abrirá em sua própria rota, como `/qrcode-component` e `/price-grid-component`

## Observações

- Nenhum framework foi utilizado.
- Os projetos existentes foram preservados.
- A navegação funciona com caminhos relativos, compatíveis com deploy estático.

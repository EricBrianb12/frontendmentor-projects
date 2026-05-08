# Frontend Mentor Projects Hub

## PT-BR

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

---

## EN

Centralized hub for Frontend Mentor challenges built with plain HTML, CSS, and JavaScript.

The goal of this repository is to gather all projects in one place, with a main homepage at the root acting as both a portfolio and a navigation hub for each challenge. Each project remains isolated in its own folder, with its own files and relative paths, allowing the entire repository to be deployed as a single static project on Vercel.

## Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Static deployment on Vercel

## Project Organization

Each challenge lives in its own folder and can be accessed directly by route:

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

The root of the project contains the main hub homepage:

- [index.html](/Users/gabrielbassouto/Documents/frontendmentor-projects/index.html)
- [style.css](/Users/gabrielbassouto/Documents/frontendmentor-projects/style.css)
- [script.js](/Users/gabrielbassouto/Documents/frontendmentor-projects/script.js)

## Structure

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

## Hub Homepage

The main homepage was built to work as a static portfolio:

- responsive layout
- dark mode visual style
- project cards with previews
- button to open each project
- button to open the matching folder on GitHub
- card rendering powered by JavaScript from a central project list

## How To Add A New Project

1. Create a new folder at the root using a name without spaces, for example `advice-generator`.
2. Make sure the project contains at least an `index.html`.
3. Keep CSS, JS, and asset paths relative to that folder.
4. Add the new item to the project list in [script.js](/Users/gabrielbassouto/Documents/frontendmentor-projects/script.js).
5. If you want, add a `preview.jpg` or similar preview image for the hub card.

## Running Locally

Since this is a static project, you can serve the root with any simple local server. Example:

```bash
python3 -m http.server 8000
```

or use the Live Server extension in your editor.

## Deploying To Vercel

To deploy on Vercel:

1. Push this repository to GitHub.
2. Import the repository into Vercel.
3. Configure it as a static project.
4. No build command is required.
5. If the interface asks for an output directory, use the repository root.

After that:

- the homepage will be available at `/`
- each project will open on its own route, such as `/qrcode-component` and `/price-grid-component`

## Notes

- No framework was used.
- Existing projects were preserved.
- Navigation uses relative paths compatible with static deployment.

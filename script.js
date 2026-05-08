const projects = [
  {
    name: "Recipe Page",
    slug: "pagina-de-receitas",
    level: "Newbie",
    description: "Pagina de receita com foco em tipografia, espacamento e hierarquia visual bem definida.",
    preview: "./pagina-de-receitas/image.png"
  },
  {
    name: "Social Links Profile",
    slug: "perfil-links-sociais",
    level: "Newbie",
    description: "Card de perfil social com estrutura simples, contraste forte e estados de interacao.",
    preview: "./perfil-links-sociais/preview.jpg"
  },
  {
    name: "Blog Preview Card",
    slug: "blog-preview-card",
    level: "Newbie",
    description: "Componente de card editorial com imagem, metadata e chamada para leitura.",
    preview: "./blog-preview-card/preview.jpg"
  },
  {
    name: "QR Code Component",
    slug: "qrcode-component",
    level: "Newbie",
    description: "Card minimalista com QR code, alinhamento central e composicao enxuta.",
    preview: "./qrcode-component/preview.jpg"
  },
  {
    name: "Results Summary Component",
    slug: "summary-component",
    level: "Newbie",
    description: "Componente de resumo com metricas, gradientes e layout dividido em duas colunas.",
    preview: "./summary-component/preview.jpg"
  },
  {
    name: "Product Preview Card",
    slug: "product-preview-card",
    level: "Newbie",
    description: "Card de produto com destaque comercial, imagem lateral e CTA principal.",
    preview: "./product-preview-card/preview.jpg"
  },
  {
    name: "NFT Preview Card",
    slug: "nft-preview-card",
    level: "Newbie",
    description: "Preview card com ambientacao dark, hover overlay e bloco de informacoes do item.",
    preview: "./nft-preview-card/preview.jpg"
  },
  {
    name: "Order Summary Component",
    slug: "order-summary-component",
    level: "Newbie",
    description: "Resumo de pedido com destaque para plano, acao primaria e organizacao visual limpa.",
    preview: "./order-summary-component/preview.jpg"
  },
  {
    name: "Stats Preview Card",
    slug: "stats-preview-card",
    level: "Newbie",
    description: "Card com estatisticas, imagem de apoio e foco em contraste e legibilidade.",
    preview: "./stats-preview-card/preview.jpg"
  },
  {
    name: "3 Column Preview Card",
    slug: "column-preview-card",
    level: "Newbie",
    description: "Layout em tres colunas com identidade visual separada por categoria.",
    preview: "./column-preview-card/preview.jpg"
  },
  {
    name: "Single Price Grid Component",
    slug: "price-grid-component",
    level: "Newbie",
    description: "Componente de tabela de preco com blocos bem definidos, CTA e responsividade.",
    preview: "./price-grid-component/preview.jpg"
  }
];

const projectGrid = document.querySelector("[data-project-grid]");
const countElement = document.querySelector("[data-stat='count']");
const githubBaseUrl = "https://github.com/EricBrianb12/frontendmentor-projects/tree/main";

const createProjectCard = (project) => {
  const article = document.createElement("article");
  article.className = "project-card";

  article.innerHTML = `
    <div class="project-preview">
      <img src="${project.preview}" alt="Preview do projeto ${project.name}">
    </div>
    <div class="project-body">
      <span class="project-tag">${project.level}</span>
      <h3>${project.name}</h3>
      <p class="project-slug">/${project.slug}</p>
      <p class="project-description">${project.description}</p>
      <div class="project-links">
        <a class="project-cta" href="./${project.slug}/" target="_blank">Visualizar Projeto</a>
        <a class="project-source" href="${githubBaseUrl}/${project.slug}" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  `;

  return article;
};

const renderProjects = () => {
  if (!projectGrid) {
    return;
  }

  const sortedProjects = [...projects].sort((firstProject, secondProject) =>
    firstProject.name.localeCompare(secondProject.name)
  );

  sortedProjects.forEach((project) => {
    projectGrid.appendChild(createProjectCard(project));
  });

  if (countElement) {
    countElement.textContent = String(sortedProjects.length).padStart(2, "0");
  }
};

renderProjects();

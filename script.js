const localizedContent = {
  "pt-BR": {
    htmlLang: "pt-BR",
    pageTitle: "Frontend Mentor Projects Hub",
    metaDescription: "Hub de projetos Frontend Mentor desenvolvidos com HTML, CSS e JavaScript puro.",
    navRepo: "Repositorio",
    heroEyebrow: "Portfolio estatico",
    heroTitle: "Projetos Frontend Mentor organizados em um unico hub moderno.",
    heroText: "Uma coleção de desafios desenvolvidos com HTML, CSS e JavaScript puro, com navegacão centralizada, rotas estaticas e estrutura pronta para deploy unico na Vercel.",
    heroPrimaryButton: "Explorar projetos",
    heroSecondaryButton: "Ver no GitHub",
    statsAriaLabel: "Resumo do portfólio",
    statsProjectsLabel: "Projetos",
    statsDeployLabel: "Deploy",
    projectsEyebrow: "Desafios",
    projectsTitle: "Todos os projetos",
    projectsCopy: "Cada card leva para a versão publicada dentro deste próprio repositório e para a pasta correspondente no GitHub.",
    projectSortLabel: "Ordem",
    projectSortNewest: "Mais recentes",
    projectSortOldest: "Mais antigos",
    projectSortAriaLabel: "Ordenar projetos",
    footerText: "Construido com HTML, CSS e JavaScript puro para servir como hub central dos desafios Frontend Mentor.",
    projectButton: "Visualizar Projeto",
    githubButton: "GitHub",
    previewAlt: "Preview do projeto",
    levels: {
      newbie: "Iniciante"
    },
    descriptions: {
      "pagina-de-receitas": "Página de receita com foco em tipografia, espaçamento e hierarquia visual bem definida.",
      "perfil-links-sociais": "Card de perfil social com estrutura simples, contraste forte e estados de interação.",
      "blog-preview-card": "Componente de card editorial com imagem, metadata e chamada para leitura.",
      "qrcode-component": "Card minimalista com QR code, alinhamento central e composição enxuta.",
      "summary-component": "Componente de resumo com metricas, gradientes e layout dividido em duas colunas.",
      "product-preview-card": "Card de produto com destaque comercial, imagem lateral e CTA principal.",
      "nft-preview-card": "Preview card com ambientação dark, hover overlay e bloco de informações do item.",
      "order-summary-component": "Resumo de pedido com destaque para plano, ação primária e organização visual limpa.",
      "stats-preview-card": "Card com estatísticas, imagem de apoio e foco em contraste e legibilidade.",
      "column-preview-card": "Layout em três colunas com identidade visual separada por categoria.",
      "price-grid-component": "Componente de tabela de preço com blocos bem definidos, CTA e responsividade.",
      "profile-card-component": "Card de perfil com composição central, avatar destacado e estatísticas resumidas."
    }
  },
  en: {
    htmlLang: "en",
    pageTitle: "Frontend Mentor Projects Hub",
    metaDescription: "Frontend Mentor project hub built with plain HTML, CSS and JavaScript.",
    navRepo: "Repository",
    heroEyebrow: "Static portfolio",
    heroTitle: "Frontend Mentor projects organized into one modern hub.",
    heroText: "A collection of challenges built with plain HTML, CSS and JavaScript, with centralized navigation, static routes and a structure ready for a single Vercel deployment.",
    heroPrimaryButton: "Explore projects",
    heroSecondaryButton: "View on GitHub",
    statsAriaLabel: "Portfolio summary",
    statsProjectsLabel: "Projects",
    statsDeployLabel: "Deployment",
    projectsEyebrow: "Challenges",
    projectsTitle: "All projects",
    projectsCopy: "Each card links to the live version inside this repository and to the matching folder on GitHub.",
    projectSortLabel: "Order",
    projectSortNewest: "Newest first",
    projectSortOldest: "Oldest first",
    projectSortAriaLabel: "Sort projects",
    footerText: "Built with plain HTML, CSS and JavaScript to serve as the central hub for these Frontend Mentor challenges.",
    projectButton: "View Project",
    githubButton: "GitHub",
    previewAlt: "Project preview",
    levels: {
      newbie: "Newbie"
    },
    descriptions: {
      "pagina-de-receitas": "Recipe page focused on typography, spacing and a well-defined visual hierarchy.",
      "perfil-links-sociais": "Social profile card with a simple structure, strong contrast and interaction states.",
      "blog-preview-card": "Editorial card component with image, metadata and a clear reading CTA.",
      "qrcode-component": "Minimal card with a QR code, centered alignment and compact composition.",
      "summary-component": "Summary component with metrics, gradients and a two-column layout.",
      "product-preview-card": "Product card with a commercial highlight, side image and strong primary CTA.",
      "nft-preview-card": "Dark themed preview card with a hover overlay and a clear info block.",
      "order-summary-component": "Order summary component with plan emphasis, primary action and clean organization.",
      "stats-preview-card": "Stats card with supporting imagery and a focus on contrast and readability.",
      "column-preview-card": "Three-column layout with a distinct visual identity for each category.",
      "price-grid-component": "Price grid component with clearly separated blocks, CTA and responsive behavior.",
      "profile-card-component": "Profile card with a centered composition, prominent avatar and condensed stats."
    }
  }
};

const projects = [
  {
    name: "Recipe Page",
    slug: "pagina-de-receitas",
    levelKey: "newbie",
    preview: "./pagina-de-receitas/image.png"
  },
  {
    name: "Social Links Profile",
    slug: "perfil-links-sociais",
    levelKey: "newbie",
    preview: "./perfil-links-sociais/preview.jpg"
  },
  {
    name: "Blog Preview Card",
    slug: "blog-preview-card",
    levelKey: "newbie",
    preview: "./blog-preview-card/preview.jpg"
  },
  {
    name: "QR Code Component",
    slug: "qrcode-component",
    levelKey: "newbie",
    preview: "./qrcode-component/preview.jpg"
  },
  {
    name: "Results Summary Component",
    slug: "summary-component",
    levelKey: "newbie",
    preview: "./summary-component/preview.jpg"
  },
  {
    name: "Product Preview Card",
    slug: "product-preview-card",
    levelKey: "newbie",
    preview: "./product-preview-card/preview.jpg"
  },
  {
    name: "NFT Preview Card",
    slug: "nft-preview-card",
    levelKey: "newbie",
    preview: "./nft-preview-card/preview.jpg"
  },
  {
    name: "Order Summary Component",
    slug: "order-summary-component",
    levelKey: "newbie",
    preview: "./order-summary-component/preview.jpg"
  },
  {
    name: "Stats Preview Card",
    slug: "stats-preview-card",
    levelKey: "newbie",
    preview: "./stats-preview-card/preview.jpg"
  },
  {
    name: "3 Column Preview Card",
    slug: "column-preview-card",
    levelKey: "newbie",
    preview: "./column-preview-card/preview.jpg"
  },
  {
    name: "Single Price Grid Component",
    slug: "price-grid-component",
    levelKey: "newbie",
    preview: "./price-grid-component/preview.jpg"
  },
  {
    name: "Profile Card Component",
    slug: "profile-card-component",
    levelKey: "newbie",
    preview: "./profile-card-component/preview.jpg"
  }
];

const projectGrid = document.querySelector("[data-project-grid]");
const countElement = document.querySelector("[data-stat='count']");
const languageButtons = document.querySelectorAll("[data-language]");
const sortDropdown = document.querySelector("[data-sort-dropdown]");
const sortTrigger = document.querySelector("[data-sort-trigger]");
const sortMenu = document.querySelector("[data-sort-menu]");
const sortCurrent = document.querySelector("[data-sort-current]");
const sortOptions = document.querySelectorAll("[data-sort-option]");
const githubBaseUrl = "https://github.com/EricBrianb12/frontendmentor-projects/tree/main";
const defaultLanguage = navigator.language?.toLowerCase().startsWith("en") ? "en" : "pt-BR";
const savedLanguage = localStorage.getItem("hub-language");
const savedSort = localStorage.getItem("hub-project-order");
let currentLanguage = savedLanguage && localizedContent[savedLanguage] ? savedLanguage : defaultLanguage;
let currentSort = savedSort === "oldest" ? "oldest" : "newest";

const getCopy = () => localizedContent[currentLanguage];

const updateStaticCopy = () => {
  const copy = getCopy();

  document.documentElement.lang = copy.htmlLang;
  document.title = copy.pageTitle;

  const metaDescription = document.querySelector("meta[name='description']");
  if (metaDescription) {
    metaDescription.setAttribute("content", copy.metaDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (copy[key]) {
      element.textContent = copy[key];
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (copy[key]) {
      element.setAttribute("aria-label", copy[key]);
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.language === currentLanguage);
    button.setAttribute("aria-pressed", String(button.dataset.language === currentLanguage));
  });

  updateSortUi(copy);
};

const createProjectCard = (project) => {
  const copy = getCopy();
  const article = document.createElement("article");  
  article.className = "project-card";

  article.innerHTML = `
    <div class="project-preview">
      <img src="${project.preview}" alt="${copy.previewAlt} ${project.name}">
    </div>
    <div class="project-body">
      <span class="project-tag">${copy.levels[project.levelKey] ?? project.levelKey}</span>
      <h3>${project.name}</h3>
      <p class="project-slug">/${project.slug}</p>
      <p class="project-description">${copy.descriptions[project.slug] ?? ""}</p>
      <div class="project-links">
        <a class="project-cta" href="./${project.slug}/" target="_blank" rel="noopener noreferrer">${copy.projectButton}</a>
        <a class="project-source" href="${githubBaseUrl}/${project.slug}" target="_blank" rel="noopener noreferrer">${copy.githubButton}</a>
      </div>
    </div>
  `;

  return article;
};

const renderProjects = () => {
  if (!projectGrid) {
    return;
  }

  projectGrid.innerHTML = "";

  const sortedProjects = currentSort === "oldest" ? [...projects] : [...projects].reverse();

  sortedProjects.forEach((project) => {
    projectGrid.appendChild(createProjectCard(project));
  });

  if (countElement) {
    countElement.textContent = String(sortedProjects.length).padStart(2, "0");
  }
};

const setProjectSort = (sortOrder) => {
  if (!["newest", "oldest"].includes(sortOrder)) {
    return;
  }

  currentSort = sortOrder;
  localStorage.setItem("hub-project-order", sortOrder);
  updateSortUi();
  renderProjects();
};

const updateSortUi = (copy = getCopy()) => {
  if (!sortTrigger || !sortMenu || !sortCurrent || !sortOptions.length) {
    return;
  }

  sortTrigger.setAttribute("aria-label", copy.projectSortAriaLabel);
  sortMenu.setAttribute("aria-label", copy.projectSortAriaLabel);
  sortCurrent.textContent = currentSort === "newest" ? copy.projectSortNewest : copy.projectSortOldest;

  sortOptions.forEach((option) => {
    const isSelected = option.dataset.sortOption === currentSort;
    const label = option.dataset.sortOption === "newest" ? copy.projectSortNewest : copy.projectSortOldest;

    option.textContent = label;
    option.classList.toggle("is-selected", isSelected);
    option.setAttribute("aria-selected", String(isSelected));
  });
};

const closeSortMenu = () => {
  if (!sortDropdown || !sortTrigger) {
    return;
  }

  sortDropdown.classList.remove("is-open");
  sortTrigger.setAttribute("aria-expanded", "false");
};

const openSortMenu = () => {
  if (!sortDropdown || !sortTrigger) {
    return;
  }

  sortDropdown.classList.add("is-open");
  sortTrigger.setAttribute("aria-expanded", "true");
};

const toggleSortMenu = () => {
  if (!sortDropdown) {
    return;
  }

  if (sortDropdown.classList.contains("is-open")) {
    closeSortMenu();
    return;
  }

  openSortMenu();
};

const setLanguage = (language) => {
  if (!localizedContent[language]) {
    return;
  }

  currentLanguage = language;
  localStorage.setItem("hub-language", language);
  updateStaticCopy();
  renderProjects();
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.language);
  });
});

if (sortTrigger) {
  sortTrigger.addEventListener("click", () => {
    toggleSortMenu();
  });
}

sortOptions.forEach((option) => {
  option.addEventListener("click", () => {
    setProjectSort(option.dataset.sortOption);
    closeSortMenu();
  });
});

document.addEventListener("click", (event) => {
  if (!sortDropdown || sortDropdown.contains(event.target)) {
    return;
  }

  closeSortMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeSortMenu();
  }
});

updateStaticCopy();
renderProjects();

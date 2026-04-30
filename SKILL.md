# Project Setup Skill

Este documento descreve o fluxo padrão para iniciar um novo projeto Frontend Mentor neste repositório.

## Objetivo
Criar uma base consistente para cada novo desafio, incluindo:
- estrutura de arquivos HTML/CSS
- variáveis de cor
- variáveis de tipografia
- importação de fonte do Google Fonts
- README do projeto no mesmo estilo dos outros
- atualização do README principal da raiz com placeholder para link

## Passo a passo

1. Perguntar ao usuário:
   - nome do projeto / nome do desafio
   - quais cores principais e secundárias serão usadas
   - qual fonte do Google Fonts será usada e quais pesos
   - se há outras configurações de tipografia específicas

2. Criar o projeto com a estrutura padrão:
   - `index.html`
   - `css/main.css`
   - `css/base/reset.css`
   - `css/base/typograph.css`
   - `css/base/variables.css`
   - `css/components/*` (quando necessário)

3. Adicionar no `css/main.css` as importações:
   - `@import url("./base/reset.css");`
   - `@import url("./base/typograph.css");`
   - `@import url("./base/variables.css");`
   - `@import url("./components/button.css");` (se houver)

4. Criar variáveis de cor em `css/base/variables.css` usando nomes curtos:
   - `--white`, `--black`, `--gray-600`, `--purple-500`, `--blue-700`, etc.
   - classes utilitárias de texto com mesmo nome das variáveis
   - classes utilitárias de fundo `bg-*` usando as mesmas variáveis

5. Criar variáveis de tipografia em `css/base/typograph.css` usando shorthand `font`:
   - `--text01`, `--text02`, `--text03`, `--text03-bold`, `--text03-medium`, etc.
   - classes `.text01`, `.text02`, `.text03`, `.text03-bold`, `.text03-medium`, etc.

6. Incluir importação do Google Font no `index.html` quando solicitado.

7. Criar `README.md` do projeto no padrão dos outros projetos:
   - título: `# frontendmentor-projects`
   - descrição curta do desafio
   - seção `## desafio | Projeto XX`
   - imagem placeholder `![alt text](preview.jpg)`

8. Atualizar `README.md` da raiz adicionando o novo projeto com placeholder `-` no link.

## Uso
Sempre que iniciar um novo projeto, seguir este documento e confirmar com o usuário:
- fonte
- cores
- nome do desafio
- número do projeto

Assim o repositório mantém consistência e todas as etapas básicas são aplicadas automaticamente.
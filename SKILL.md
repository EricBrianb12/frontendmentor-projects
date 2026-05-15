# Project Setup Skill

Este documento descreve o fluxo padrão para iniciar um novo projeto Frontend Mentor neste repositório.

## Objetivo
Criar uma base consistente para cada novo desafio, incluindo:
- estrutura inicial de arquivos HTML/CSS
- organização do projeto como subpasta do repositório
- variáveis de cor
- variáveis de tipografia
- `README.md` interno do projeto no mesmo estilo dos projetos existentes

## Fluxo obrigatório ao iniciar um novo projeto

Sempre que o usuário pedir para criar um novo projeto com base neste arquivo, seguir esta ordem:

1. Perguntar apenas o nome do projeto.
2. Após receber o nome:
   - criar a pasta do projeto com o nome informado pelo usuário
   - montar a estrutura inicial de arquivos e pastas
3. Depois que a estrutura estiver criada, perguntar quais cores devem ser usadas.
4. Com a resposta do usuário, criar `css/base/variables.css` seguindo o padrão adotado no repositório.
5. Após finalizar as variáveis de cor, perguntar quais são as variáveis de tipografia.
6. Com a resposta do usuário, criar `css/base/typography.css` seguindo a mesma estrutura utilizada nos projetos já existentes.
7. Após finalizar as variáveis, criar o `README.md` dentro da pasta do projeto seguindo o padrão dos outros projetos.

## Estrutura padrão do projeto

Para cada novo projeto, criar:
- `index.html`
- `css/main.css`
- `css/base/reset.css`
- `css/base/typography.css`
- `css/base/variables.css`
- `css/layout/`
- `css/components/` quando necessário
- `assets/`

## Regras do `main.css`

Adicionar em `css/main.css`:

```css
@import url("./base/reset.css");
@import url("./base/typography.css");
@import url("./base/variables.css");
```

Se o projeto exigir componentes separados, adicionar também os imports necessários de `css/components/`.

## Regras de cores

Ao criar `css/base/variables.css`:
- usar nomes curtos e consistentes como `--white`, `--black`, `--gray-600`, `--blue-700`
- organizar por grupos de cor quando fizer sentido
- criar classes utilitárias de texto com o mesmo nome das variáveis
- criar classes utilitárias de fundo com prefixo `bg-` quando necessário
- manter o estilo já utilizado nos projetos anteriores

## Regras de tipografia

Ao criar `css/base/typography.css`:
- usar variáveis como `--text01`, `--text02`, `--text03`, `--text03-bold`, `--text03-medium`
- usar shorthand `font`
- incluir classes utilitárias correspondentes como `.text01`, `.text02`, `.text03`
- incluir `letter-spacing` quando isso fizer parte da definição tipográfica
- manter a mesma lógica já aplicada nos projetos existentes

## Regras do `README.md` do projeto

Criar o `README.md` do projeto com este padrão:
- título: `# frontendmentor-projects`
- descrição curta do desafio
- seção `## desafio | Projeto XX`
- imagem placeholder `![alt text](preview.jpg)`

## Regra de interação

Não pedir todas as informações de uma vez.

Seguir sempre este fluxo conversacional:
1. pedir nome do projeto
2. criar estrutura inicial do projeto
3. pedir cores
4. criar `variables.css`
5. pedir variáveis de tipografia
6. criar `typography.css`
7. criar `README.md` interno do projeto

## Uso

Sempre que o usuário pedir para iniciar um novo projeto com base neste arquivo, executar esse fluxo exatamente nessa ordem para manter consistência no repositório.

## Fluxo de finalização

Quando o usuário disser que o projeto foi finalizado, seguir este checklist:

1. revisar o projeto final para confirmar estrutura, semântica e responsividade
2. manter o `README.md` da raiz apenas com a organização geral do hub, sem criar seção numerada do projeto
3. adicionar o projeto na lista do `script.js` da raiz com:
   - `name`
   - `slug`
   - `levelKey`
   - `preview`
4. adicionar a descrição localizada do projeto em `pt-BR` e `en` dentro de `script.js`
5. confirmar que o `preview.jpg` existe dentro da pasta do projeto
6. revisar `git status` para garantir que apenas as mudanças esperadas serão incluídas
7. criar um commit com mensagem clara descrevendo a finalização do projeto

Esse fluxo deve ser aplicado sempre que um projeto novo passar de estrutura inicial para projeto finalizado e publicado no hub da raiz.

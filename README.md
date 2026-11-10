# IEFA, CPAINT

Site de apoio do CPAINT (Curso Prático para os Aspirantes a Oficial Intendente, ICA 37-758), publicado em
[cpaint.iefa.com.br](https://cpaint.iefa.com.br). Reúne o PPC, as disciplinas, o cronograma e as páginas de
cada aula, com slides, exercícios e dados das práticas.

## Stack

| Peça                                                | Uso                                                                        |
| :-------------------------------------------------- | :------------------------------------------------------------------------- |
| [Bun](https://bun.sh)                               | Gerenciador de pacotes e executor dos scripts (versão em `packageManager`) |
| [TanStack Start](https://tanstack.com/start) + Vite | App React com rotas em `src/routes/`                                       |
| [Fumadocs](https://fumadocs.dev)                    | Conteúdo em MDX, navegação, busca e `llms.txt`                             |
| KaTeX e Mermaid                                     | Fórmulas (`$...$`) e diagramas (bloco ` ```mermaid `) dentro do MDX        |
| Tailwind CSS 4                                      | Estilo (`src/styles/app.css`)                                              |
| Nitro, preset `vercel`                              | Saída do build para a Vercel                                               |
| Biome                                               | Lint e formatação                                                          |

## Comandos

```bash
bun install          # dependências (também instala os hooks do Husky)
bun run dev          # servidor local em http://localhost:3000
bun run build        # build de produção
bun run check        # Biome + checagem de tipos (o mesmo que o CI roda)
bun run fix          # aplica as correções automáticas do Biome
bun run upgrade      # atualiza todas as dependências para a última versão
```

## Onde fica cada coisa

```
content/docs/                 páginas em MDX; a URL segue o caminho do arquivo
  cpaint/
    ppc.mdx                   Projeto Pedagógico do Curso
    previsao-demanda/         disciplina de Previsão de Demanda
      stat101.mdx ...         matérias (níveis 100, 200 e 300)
      cronograma/2026.mdx     cronograma da turma
      aulas/2026/modulo-NN    página de cada aula (slides do Figma e tópicos)
    */meta.json               ordem e títulos do menu lateral
public/                       arquivos baixáveis das práticas (.xlsx, .csv)
src/components/               componentes liberados no MDX (Badge, FigmaDeck, YouTube, Mermaid)
src/routes/                   rotas do TanStack Start
scripts/                      geradores de dados das práticas
```

Componentes usados no MDX sem `import` ficam registrados em `src/components/mdx.tsx`.

## Padrões

- **Commits**: [Conventional Commits](https://www.conventionalcommits.org), validados no `commit-msg` pelo
  commitlint. Ex.: `feat(stat101): escalas de mensuração de Stevens`.
- **Pre-commit**: confere a formatação e, se o `gitleaks` estiver instalado, procura segredos no que está staged.
- **CI** (`.github/workflows/ci.yml`): `bun run check` e `bun run build` a cada push na `main`.
- **Biome**: mesma configuração dos apps do monorepo IEFA (tab, 160 colunas, sem ponto e vírgula, regras
  estritas de tipos e imports).

## Deploy

A Vercel publica automaticamente cada push na `main` em [cpaint.iefa.com.br](https://cpaint.iefa.com.br).
Não há PR nem branch de preview no fluxo do curso: a `main` é o site.

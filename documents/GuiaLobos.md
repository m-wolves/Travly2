# Guia de Contribuição - Travly - Projeto React (TypeScript + Tailwind CSS)

Este documento define as diretrizes de desenvolvimento para o projeto. Por favor, siga estas boas práticas para manter o código organizado, legível e escalável. 〵(^ o ^)〴

## Rodar a Aplicação
Use `npm run dev` no terminal.

---

## Estrutura de Branches

### Branches principais (~˘˗˘)~
- **main**: Contém a versão estável que está em produção. Nenhum commit direto.
- **develop**: Integra todas as funcionalidades em desenvolvimento. Base para as branches de feature e bugfix.


### Branches por tarefa
- **feature/nome-da-feature**: Para novas funcionalidades.
- **bugfix/nome-do-bug**: Para correções antes do deploy.

---

## Fluxo de trabalho ୧(^˽^)୨

1. Criar branch a partir de develop
2. Trabalhar na task
3. Abrir Pull Request para develop
4. Passar por code review e testes
5. Merge

---

## Padrões de Código

### Linguagem
- React com TypeScript (.tsx)
- CSS puro (Ia ser CSS com Tailwind mas por algum motivo não está funcionando algumas coisas)
- Evitar JavaScript puro, priorizar tipagem estrita com TypeScript

### Estrutura de Componentes
Organizamos os componentes seguindo o Atomic Design: (ง ᗒᗨᗕ)ง

src/
└── components/
    ├── **atoms**/ -> Elementos básicos (ex: Button)
    ├── **molecules**/ -> Combinação de átomos, ou elementos complexos (ex: FormField, Cards)
    ├── **organisms**/ -> Blocos completos (ex: Navbar, Footer)
    └── **templates**/ -> Layouts e estruturas de página

### Estilo
- Seguir convenções de nomenclatura claras
- Usar componentes para evitar repetição de código

---

## Convenções Gerais (ー◡ーゞ

### Commits Semânticos
Utilizar o padrão:
- **feature**: adicionar algo novo
- **fix**: corrige algum bug
- **refactor**: ajusta estrutura de algo
- **release**: prepara versão para produção

### Pull Requests
- Sempre abrir PRs para a develop
- Adicionar descrição do que foi feito
- Pedir pelo menos 1 code review
- Resolver conflitos antes do merge

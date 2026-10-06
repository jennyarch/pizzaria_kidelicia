# KiDelicia

Landing page moderna para a pizzaria **KiDelicia**, com foco em apresentar a marca, destacar os produtos e incentivar pedidos pelo WhatsApp.

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui
- Lucide React
- Vercel Analytics

## Funcionalidades

- Hero section com chamada para ação
- Apresentação da KiDelicia
- Destaque para pizzas salgadas e doces
- Seção de produtos complementares
- Informações de atendimento e localização
- Botões de pedido direcionados ao WhatsApp
- Layout responsivo para desktop e dispositivos móveis
- Imagens reais fornecidas pela pizzaria

## Pré-requisitos

- Node.js 20 ou superior
- pnpm 12 ou superior

## Instalação

Clone o projeto e instale as dependências:

```bash
pnpm install
```

## Desenvolvimento

Inicie o servidor local:

```bash
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Build de produção

Gere a versão otimizada:

```bash
pnpm build
```

Para iniciar a aplicação em produção:

```bash
pnpm start
```

## Estrutura principal

```text
app/
├── layout.tsx       # Layout global e metadados
├── page.tsx         # Landing page da KiDelicia
└── globals.css      # Tokens e estilos globais

public/              # Arquivos públicos e assets locais
```

## Personalização

Para atualizar as informações comerciais, edite o arquivo `app/page.tsx`, incluindo:

- Número do WhatsApp
- Endereço
- Horários de funcionamento
- Textos institucionais
- Produtos e chamadas para ação
- URLs das imagens

Os dados de contato utilizados atualmente são demonstrativos e devem ser substituídos antes da publicação.

## Publicação

O projeto está preparado para publicação na Vercel. Também é possível instalar o código em outro projeto Next.js usando o fluxo de instalação do shadcn ou conectando o repositório ao GitHub.

## Licença

Este projeto é de uso privado da KiDelicia. Ajuste a licença conforme a necessidade do negócio.

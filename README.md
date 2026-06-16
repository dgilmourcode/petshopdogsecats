<div align="center">
  <br />
  <h1>🐾 PetShop Dogs&amp;Cats</h1>
  <p>
    <strong>Pet shop website — React + Vite + Tailwind CSS v4 + shadcn/ui</strong>
  </p>
  <p>
    Site institucional completo para petshop com design minimalista moderno,
    galeria interativa, depoimentos em carrossel e formulário de contato.
  </p>
  <br />
</div>

## Sobre

O **PetShop Dogs&Cats** é um site institucional desenvolvido como projeto de
portfólio. Apresenta os serviços oferecidos, galeria de fotos com lightbox,
depoimentos de clientes em carrossel vertical infinito e formulário de contato.

### Stack

| Tecnologia | Versão |
|---|---|
| React | 19+ |
| TypeScript | ~5.8 |
| Vite | 8 |
| Tailwind CSS | 4 |
| shadcn/ui | 4 (Base UI) |
| React Router | 7+ |
| Lucide React | — |

### Páginas

- **Início** — Hero section, benefícios, galeria "Pets bem cuidados", depoimentos, CTA
- **Sobre** — História da empresa, valores, equipe
- **Serviços** — Cards dos serviços, galeria "Nossos serviços em ação"
- **Contato** — Formulário, informações, redes sociais

## Funcionalidades

- **Galeria interativa** — Grid/carrossel com lightbox modal, navegação por teclado e auto-play
- **Depoimentos** — Carrossel vertical infinito com fotos circulares, avaliação por estrelas e auto-play com pausa ao hover
- **Header fixo** — Navegação responsiva com menu mobile
- **Scroll to top** — Rolagem ao topo ao trocar de rota
- **Design responsivo** — Mobile-first, breakpoints Tailwind
- **Ícones SVG** — Instagram, Facebook, YouTube e WhatsApp inline (sem dependências extras)

## Como rodar

```bash
# clone
git clone https://github.com/dgilmourcode/petshopdogsecats.git

# acesse
cd petshopdogsecats

# instale dependências
npm install

# dev server
npm run dev

# build
npm run build

# preview do build
npm run preview
```

## Estrutura

```
src/
├── components/
│   ├── ui/          # shadcn/ui components (button, input, label, textarea)
│   ├── Footer.tsx
│   ├── Gallery.tsx
│   ├── Header.tsx
│   ├── ScrollToTop.tsx
│   └── Testimonials.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   └── Contact.tsx
├── App.tsx
├── index.css
└── main.tsx
```

## Licença

MIT

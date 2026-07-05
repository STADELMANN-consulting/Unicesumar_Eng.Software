# Portfólio — Claudio Stadelmann

Site pessoal responsivo desenvolvido como atividade **MAPA** da disciplina de
**Programação Front-End** (Bacharelado em Engenharia de Software — UniCesumar).

**Tema:** portfólio profissional que une a experiência em engenharia industrial /
SAP à formação em engenharia de software — *"do chão de fábrica ao código"*.

> Desenvolvido com **HTML5**, **CSS3** e **JavaScript** (com jQuery via CDN).
> Sem frameworks de build — o site funciona apenas abrindo o `index.html`.

---

## 🚀 Como executar

**Opção 1 — abrir direto:** dê um duplo clique em `index.html`.

**Opção 2 — servidor local (recomendado):** para o carregamento correto de todos
os recursos, sirva a pasta com um servidor simples:

```bash
# com Python
python -m http.server 8000
# depois acesse http://localhost:8000

# ou, no VS Code, use a extensão "Live Server"
```

---

## 🌐 Publicação no GitHub Pages

Os arquivos já estão prontos para hospedagem. No repositório do GitHub:

1. Envie todos os arquivos para a branch `main` (o `index.html` deve ficar na **raiz**).
2. Vá em **Settings → Pages**.
3. Em **Source**, selecione a branch `main` e a pasta `/ (root)`.
4. Salve. O site ficará disponível em:
   `https://stadelmann-consulting.github.io/Unicesumar_Eng.Software/`

> Se o endereço final for diferente, atualize as tags `<link rel="canonical">` e
> `og:url` no `<head>` de cada página.

---

## 📁 Estrutura do projeto

```
.
├── index.html          # Início (hero, KPIs, atuação, destaques)
├── sobre.html          # Perfil, competências, trajetória, formação
├── projetos.html       # Grade de projetos com filtro por área
├── contato.html        # Formulário com validação + canais diretos
├── css/
│   └── style.css       # Design system, layout responsivo, temas claro/escuro
├── js/
│   └── script.js       # Menu, tema, animações, filtro, validação
├── assets/
│   ├── favicon.svg     # Ícone do site
│   ├── retrato.svg     # Monograma/avatar
│   ├── og-cover.png    # Imagem de compartilhamento (Open Graph)
│   └── proj-*.svg      # Miniaturas dos projetos
└── README.md
```

---

## ✅ Requisitos da atividade e onde foram atendidos

| Requisito | Onde / como |
|---|---|
| **4+ páginas interligadas** | `index`, `sobre`, `projetos`, `contato` (menu compartilhado) |
| **Layout responsivo** | CSS *mobile-first* com Flexbox, Grid e `@media` (breakpoints em 900/720/460 px) |
| **Menu de navegação funcional** | `<nav>` semântico + menu hambúrguer no mobile (`js/script.js`) |
| **Formulário com validação em JS** | `contato.html` — nome, e-mail (regex) e mensagem, com erros em tempo real, sem recarregar |
| **2+ efeitos interativos (JS/jQuery)** | ver lista abaixo (7 efeitos no total) |
| **SEO básico** | `title` único por página, `meta description`/`keywords`, tags semânticas, `alt` nas imagens, Open Graph, `lang="pt-br"`, `canonical`, hierarquia `h1`→`h3` |

### Efeitos interativos implementados

1. **Menu hambúrguer** — abre/fecha a navegação no mobile *(JS puro)*
2. **Tema claro/escuro** — alternável e salvo no `localStorage` *(JS puro)*
3. **Barra fixa** que ganha sombra ao rolar *(JS puro)*
4. **Revelar ao rolar** + **contadores animados** — `IntersectionObserver`
5. **Filtro de projetos** com transição *fade* — **jQuery**
6. **Rolagem suave** e **botão “voltar ao topo”** — **jQuery**
7. **Validação de formulário** com feedback inline *(JS puro)*

---

## 🎨 Decisões de design

- **Identidade:** estética técnica / de engenharia (grade tipo *blueprint*, filetes
  finos, rótulos em fonte monoespaçada) que reflete o mundo de dados e SAP.
- **Tipografia:** *Space Grotesk* (títulos), *Inter* (corpo), *JetBrains Mono* (dados/código).
- **Cores:** grafite `#12161C`, fundo claro `#F6F7F9` e um único acento petróleo `#0E6E77`
  (referência a instrumentos e medidores). Tema escuro incluído.
- **Acessibilidade:** foco visível para teclado, `aria-*` na navegação e no formulário,
  e respeito a `prefers-reduced-motion`.

---

## 📝 Observações

- Por ser um site **estático (front-end)**, o formulário de contato apenas **valida**
  os dados; o envio real exigiria um serviço externo (Formspree, Netlify Forms) ou
  back-end. A validação em JavaScript é o requisito da atividade.
- As imagens (`.svg` e `.png`) são **originais**, criadas para este projeto.
- A biblioteca **jQuery** é carregada via CDN oficial (`code.jquery.com`).

---

## 👤 Autor

**Claudio Stadelmann** — Bacharelado em Engenharia de Software, UniCesumar
Coordenador de Métodos de Manutenção & especialista SAP · Savièse, Suíça

---

## 📚 Referências

- NOEL, André Abdala. *Programação Front End*. Florianópolis: Arqué, 2025.
- SILVA, Maurício Samy. *HTML5 – A linguagem de marcação que revolucionou a web*. São Paulo: Novatec, 2021.
- MDN Web Docs — *Front-end web developer*. Disponível em: https://developer.mozilla.org/pt-BR/docs/Learn/Front-end_web_developer
- W3Schools — *HTML / CSS Tutorial*. Disponível em: https://www.w3schools.com/

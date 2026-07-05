# Portfólio — Claudio Stadelmann

Site pessoal responsivo desenvolvido como atividade **MAPA** da disciplina de
**Programação Front-End** (Bacharelado em Engenharia de Software — UniCesumar).

**Tema:** portfólio profissional que une mais de 20 anos de experiência em
engenharia industrial e SAP à formação em Engenharia de Software —
*"do chão de fábrica ao código"*.

🔗 **Site publicado:** <https://stadelmann-consulting.github.io/Unicesumar_Eng.Software/>

---

## 👤 Sobre o autor

**Claudio Stadelmann** é Coordenador de Métodos de Manutenção e especialista
**SAP PM / MM / EWM**, com mais de duas décadas de atuação nos setores
biofarmacêutico, químico e de mineração — na Suíça e no Brasil. Sua carreira se
concentra no ponto onde a operação industrial encontra os sistemas de
informação: governança de dados mestres, migração para SAP S/4HANA e estratégias
de confiabilidade (RCM, FMEA, DMAIC) para maximizar a disponibilidade de ativos.

Atualmente cursando **Engenharia de Software na UniCesumar**, busca deixar de
apenas configurar e consumir sistemas para também **construí-los** — tornando-se
o elo estratégico entre as necessidades do negócio e a solução técnica. Este
portfólio é parte dessa jornada de aprendizado em desenvolvimento front-end.

---

## 🧭 O que é este projeto

Um site estático (front-end) de **quatro páginas interligadas**, feito à mão com
HTML5, CSS3 e JavaScript (com jQuery via CDN), sem frameworks de build:

| Página | Conteúdo |
|---|---|
| `index.html` | Início — apresentação, indicadores de carreira e destaques |
| `sobre.html` | Perfil, competências, trajetória e formação |
| `projetos.html` | Grade de projetos com filtro por área (Software / Engenharia) |
| `contato.html` | Formulário com validação em JavaScript + canal de contato |

---

## ✅ Por que o formulário de contato não é funcional

Este é um site **puramente estático (front-end)**, sem servidor ou back-end. Por
isso, o formulário da página de contato **apenas valida os dados em JavaScript**
(nome, e-mail com regex e mensagem, com mensagens de erro em tempo real) e exibe
uma confirmação — **ele não envia** a mensagem a lugar nenhum.

Isso é intencional e atende ao requisito da atividade, que pede **validação em
JavaScript**, não envio real. Um envio de verdade exigiria um serviço externo
(por exemplo Formspree ou Netlify Forms) ou um back-end próprio, o que está fora
do escopo de um exercício de front-end. Para contato real, o site direciona ao
**LinkedIn**.

---

## 🛠️ Tecnologias e recursos

- **HTML5 semântico** — `header`, `nav`, `main`, `section`, `article`, `footer`
- **CSS3** — design system com variáveis, layout *mobile-first* (Flexbox + Grid),
  tema claro/escuro e `@media` (breakpoints em 900 / 720 / 460 px)
- **JavaScript** — menu hambúrguer, alternância de tema salva no `localStorage`,
  barra fixa com sombra ao rolar, *reveal* ao rolar e contadores animados
  (`IntersectionObserver`) e validação de formulário
- **jQuery (CDN)** — filtro de projetos com transição *fade*, rolagem suave e
  botão "voltar ao topo"
- **SEO** — `title` único por página, `meta description`/`keywords`, Open Graph,
  `lang`, `canonical`, `alt` nas imagens e hierarquia de títulos `h1`→`h3`
- **Acessibilidade** — foco visível, atributos `aria-*` e respeito a
  `prefers-reduced-motion`

---

## 📁 Estrutura

```
.
├── index.html          # Início
├── sobre.html          # Perfil e trajetória
├── projetos.html       # Projetos com filtro
├── contato.html        # Formulário (validação em JS) + LinkedIn
├── css/
│   └── style.css       # Design system e layout responsivo
├── js/
│   └── script.js       # Interatividade (JS + jQuery)
├── assets/             # Ícones e ilustrações SVG + imagem Open Graph
└── README.md
```

---

## 🎨 Decisões de design

- **Identidade:** estética técnica / de engenharia (grade tipo *blueprint*,
  filetes finos, rótulos em fonte monoespaçada), refletindo o mundo de dados e SAP.
- **Tipografia:** *Space Grotesk* (títulos), *Inter* (corpo), *JetBrains Mono* (dados).
- **Cores:** grafite `#12161C`, fundo claro `#F6F7F9` e um acento petróleo
  `#0E6E77`. Tema escuro incluído.
- **Imagens:** todas as ilustrações (`.svg`) são **originais**, criadas para o projeto.

---

## 👤 Autor

**Claudio Stadelmann** — Bacharelado em Engenharia de Software, UniCesumar
Coordenador de Métodos de Manutenção & especialista SAP · Suíça
[LinkedIn](https://www.linkedin.com/in/claudiostadelmann-fr)

---

## 📚 Referências

- NOEL, André Abdala. *Programação Front End*. Florianópolis: Arqué, 2025.
- SILVA, Maurício Samy. *HTML5 — A linguagem de marcação que revolucionou a web*. São Paulo: Novatec, 2021.
- MDN Web Docs — *Front-end web developer*. <https://developer.mozilla.org/pt-BR/docs/Learn/Front-end_web_developer>
- W3Schools — *HTML / CSS Tutorial*. <https://www.w3schools.com/>

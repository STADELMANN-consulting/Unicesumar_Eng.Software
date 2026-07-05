/* =====================================================================
   PORTFÓLIO — CLAUDIO STADELMANN
   JavaScript principal (comportamento do site)
   ---------------------------------------------------------------------
   Efeitos interativos implementados:
     1. Menu hambúrguer (abre/fecha no mobile)          — JS puro
     2. Alternância de tema claro/escuro (localStorage) — JS puro
     3. Barra fixa que reage à rolagem                  — JS puro
     4. "Revelar ao rolar" + contadores animados        — IntersectionObserver
     5. Filtro de projetos com transição                — jQuery
     6. Rolagem suave e botão "voltar ao topo"          — jQuery
     7. Validação do formulário de contato              — JS puro
   O código roda após o carregamento do HTML (script incluído com "defer").
   ===================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ===================================================================
     1. MENU HAMBÚRGUER
     Alterna a classe que exibe o painel de navegação no mobile e
     atualiza aria-expanded (acessibilidade).
     =================================================================== */
  const burger = document.querySelector(".nav__burger");
  const menu   = document.querySelector(".nav__menu");

  if (burger && menu) {
    burger.addEventListener("click", () => {
      const aberto = menu.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", aberto ? "true" : "false");
    });

    // Fecha o menu ao clicar em um link (melhora a navegação no celular)
    menu.querySelectorAll(".nav__link").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ===================================================================
     2. TEMA CLARO / ESCURO
     Salva a preferência no localStorage (conteúdo visto na Unidade 3).
     Se não houver preferência salva, respeita a configuração do sistema.
     =================================================================== */
  const root   = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");

  // Define o tema inicial
  const temaSalvo = localStorage.getItem("tema");
  const prefereEscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (temaSalvo === "dark" || (temaSalvo === null && prefereEscuro)) {
    root.setAttribute("data-theme", "dark");
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      const atual = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", atual);
      localStorage.setItem("tema", atual);   // persiste a escolha
    });
  }

  /* ===================================================================
     3. BARRA FIXA QUE REAGE À ROLAGEM
     Adiciona sombra ao cabeçalho depois de rolar alguns pixels.
     =================================================================== */
  const header = document.querySelector(".site-header");
  if (header) {
    const aoRolar = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
  }

  /* ===================================================================
     4. REVELAR AO ROLAR + CONTADORES ANIMADOS
     Usa IntersectionObserver: dispara quando o elemento entra na tela.
     - Elementos com a classe .reveal ganham .is-visible (animação CSS).
     - Elementos [data-count] têm o número animado de 0 até o valor final.
     - Barras .skill__fill são preenchidas até a largura definida.
     =================================================================== */
  const observador = new IntersectionObserver((entradas, obs) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;
      const alvo = entrada.target;

      alvo.classList.add("is-visible");

      // Contador numérico animado
      if (alvo.hasAttribute("data-count")) animarContador(alvo);

      // Preenche barras de competência dentro do elemento revelado
      alvo.querySelectorAll(".skill__fill").forEach((barra) => {
        barra.style.width = barra.dataset.level + "%";
      });

      obs.unobserve(alvo);   // anima só uma vez
    });
  }, { threshold: 0.18 });

  document.querySelectorAll(".reveal, [data-count]").forEach((el) => observador.observe(el));

  // Função auxiliar: anima um número de 0 até o valor final
  function animarContador(el) {
    const alvo = parseInt(el.dataset.count, 10);
    const duracao = 1100;
    const inicio = performance.now();
    const passo = (agora) => {
      const p = Math.min((agora - inicio) / duracao, 1);
      // easing suave (desacelera no fim)
      const eased = 1 - Math.pow(1 - p, 3);
      el.firstChild.textContent = Math.round(alvo * eased);
      if (p < 1) requestAnimationFrame(passo);
    };
    requestAnimationFrame(passo);
  }

  /* ===================================================================
     7. VALIDAÇÃO DO FORMULÁRIO DE CONTATO
     Roda apenas na página que tem o formulário. Impede o envio,
     valida os campos e exibe mensagens de erro em tempo real.
     =================================================================== */
  const form = document.querySelector("#form-contato");
  if (form) {
    const status = form.querySelector(".form__status");

    // Regras de validação por campo
    const regras = {
      nome:     (v) => v.trim().length >= 3       || "Informe seu nome (mínimo 3 letras).",
      email:    (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Informe um e-mail válido.",
      mensagem: (v) => v.trim().length >= 10      || "Escreva uma mensagem com pelo menos 10 caracteres."
    };

    // Valida um campo isolado e mostra/esconde o erro
    function validarCampo(campo) {
      const regra = regras[campo.name];
      if (!regra) return true;                 // campos opcionais (ex.: assunto)
      const resultado = regra(campo.value);
      const valido = resultado === true;
      campo.setAttribute("aria-invalid", valido ? "false" : "true");
      const erro = campo.parentElement.querySelector(".error");
      if (erro && !valido) erro.textContent = resultado;
      return valido;
    }

    // Valida em tempo real ao sair do campo
    form.querySelectorAll("input, textarea").forEach((campo) => {
      campo.addEventListener("blur", () => validarCampo(campo));
    });

    // Ao enviar: valida tudo; se ok, mostra sucesso e limpa o formulário
    form.addEventListener("submit", (e) => {
      e.preventDefault();                      // não recarrega a página
      let tudoOk = true;
      form.querySelectorAll("input, textarea").forEach((campo) => {
        if (!validarCampo(campo)) tudoOk = false;
      });

      if (tudoOk) {
        status.textContent = "✓ Mensagem validada com sucesso! Obrigado pelo contato, retornarei em breve.";
        status.classList.add("is-visible");
        form.reset();
        // Observação: por ser um site estático (front-end), o envio real
        // exigiria um serviço externo (Formspree, Netlify Forms) ou back-end.
      } else {
        status.classList.remove("is-visible");
      }
    });
  }

});

/* =====================================================================
   BLOCO jQUERY — efeitos 5 e 6
   Carregado apenas quando a biblioteca jQuery está presente na página.
   ===================================================================== */
if (window.jQuery) {
  jQuery(function ($) {

    /* 5. FILTRO DE PROJETOS (com transição de fade) -------------------
       Ao clicar em um filtro, mostra só os projetos da categoria
       escolhida usando as animações fadeOut/fadeIn do jQuery. */
    $(".filter").on("click", function () {
      const categoria = $(this).data("filter");

      $(".filter").removeClass("is-active");   // atualiza o botão ativo
      $(this).addClass("is-active");

      $(".project").each(function () {
        const item = $(this);
        const combina = categoria === "todos" || item.data("category") === categoria;
        if (combina) item.fadeIn(250);
        else item.fadeOut(250);
      });
    });

    /* 6a. ROLAGEM SUAVE para âncoras internas (#) --------------------- */
    $('a[href^="#"]').on("click", function (e) {
      const alvo = $($(this).attr("href"));
      if (alvo.length) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: alvo.offset().top - 80 }, 500);
      }
    });

    /* 6b. BOTÃO "VOLTAR AO TOPO" -------------------------------------- */
    const btnTopo = $("#to-top");
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 500) btnTopo.fadeIn(200).css("display", "grid");
      else btnTopo.fadeOut(200);
    });
    btnTopo.on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 500);
    });

  });
}

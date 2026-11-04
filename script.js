// Menu para celular
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });

  // Fecha o menu depois que uma seção é selecionada
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Filtro simples do cardápio
const filterButtons = document.querySelectorAll(".filter-button");
const productCards = document.querySelectorAll(".product-card");
const menuCount = document.querySelector(".menu-count");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;
    let visibleProducts = 0;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    productCards.forEach((card) => {
      const shouldShow =
        selectedFilter === "todos" || card.dataset.category === selectedFilter;

      card.hidden = !shouldShow;

      if (shouldShow) visibleProducts++;
    });

    menuCount.textContent = `${visibleProducts} opções no cardápio`;
  });
});

// Preenche o ano automaticamente no rodapé
const yearElement = document.querySelector("#current-year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Ao clicar em "Pedir esse", mostra qual produto a pessoa escolheu.
// O pedido ainda é demonstrativo; configure o WhatsApp real antes de publicar.
document.querySelectorAll(".product-order").forEach((link) => {
  link.addEventListener("click", () => {
    const productName = link.dataset.product;
    const whatsappButton = document.querySelector("#whatsapp-button");

    if (whatsappButton) {
      const phoneNumber = "5500000000000"; // Troque pelo número real com DDI e DDD.
      const message = encodeURIComponent(
        `Olá! Tenho interesse em pedir o ${productName}.`
      );

      whatsappButton.href = `https://wa.me/${phoneNumber}?text=${message}`;
    }
  });
});

// Exibe o botão de voltar ao topo depois de rolar a página
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (backToTop) {
    backToTop.classList.toggle("visible", window.scrollY > 500);
  }
});

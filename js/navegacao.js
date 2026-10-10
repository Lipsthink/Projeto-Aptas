// Navegação real entre páginas (links normais). Aqui só o botão do menu mobile.
export function configurarNavegacao() {
    const botao = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu-links");

    if (!botao || !menu) {
        return;
    }

    menu.id = "menu-links";
    botao.setAttribute("aria-controls", "menu-links");
    botao.setAttribute("aria-expanded", "false");

    botao.addEventListener("click", function () {
        const aberto = menu.classList.toggle("aberto");
        botao.setAttribute("aria-expanded", String(aberto));
        botao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    });
}

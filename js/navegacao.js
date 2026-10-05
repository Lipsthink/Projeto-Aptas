const paginas = {
    "index.html": `
        <h2>Cada vida merece uma segunda chance</h2>
        <p>O Projeto Aptas atua no resgate, cuidado e encaminhamento responsável de animais em situação de abandono.</p>
    `,

    "projetos.html": `
        <h2>Nossos projetos</h2>
        <p>Conheça os projetos desenvolvidos pelo Projeto Aptas para ajudar animais em situação de abandono e vulnerabilidade.</p>
    `,

    "cadastro.html": `
        <h2>Quero participar</h2>
        <p>Preencha o cadastro para participar das atividades do Projeto Aptas.</p>
    `
};

export function configurarNavegacao() {
    const conteudo = document.querySelector("main");

    if (!conteudo) {
        return;
    }

    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const pagina = this.getAttribute("href");

            if (paginas[pagina]) {
                conteudo.innerHTML = paginas[pagina];
            }
        });
    });
}
const conteudo = document.querySelector("main");

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

const projetos = [
    {
        titulo: "Resgate e acolhimento",
        descricao: "Atuamos no resgate e acolhimento de animais encontrados em situação de abandono, negligência e vulnerabilidade."
    },
    {
        titulo: "Adoção responsável",
        descricao: "Buscamos famílias responsáveis para os animais acolhidos, incentivando a adoção consciente e responsável."
    },
    {
        titulo: "Voluntariado",
        descricao: "Pessoas interessadas podem contribuir com seu tempo e suas habilidades para auxiliar nas atividades desenvolvidas pelo projeto."
    },
    {
        titulo: "Doações",
        descricao: "As doações ajudam a manter as atividades de acolhimento, cuidado e recuperação dos animais atendidos pelo projeto."
    }
];

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const pagina = this.getAttribute("href");

        if (paginas[pagina]) {
            conteudo.innerHTML = paginas[pagina];
        }
    });
});

const formulario = document.getElementById("formulario-cadastro");

if (formulario) {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const cadastro = {
            nome: document.getElementById("nome").value,
            cpf: document.getElementById("cpf").value,
            email: document.getElementById("email").value,
            dataNascimento: document.getElementById("data-nascimento").value,
            telefone: document.getElementById("telefone").value,
            cep: document.getElementById("cep").value,
            endereco: document.getElementById("endereco").value,
            numero: document.getElementById("numero").value,
            cidade: document.getElementById("cidade").value,
            estado: document.getElementById("estado").value,
            participacao: document.getElementById("participacao").value
        };

        localStorage.setItem("cadastro", JSON.stringify(cadastro));

        alert("Cadastro salvo com sucesso!");
    });
}

import { configurarNavegacao } from "./navegacao.js";
import { configurarFormulario } from "./formulario.js";
import { configurarMascaras } from "./mascaras.js";

configurarNavegacao();
configurarFormulario();
configurarMascaras();
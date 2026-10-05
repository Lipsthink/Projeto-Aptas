import { salvarCadastro, carregarCadastro } from "./storage.js";

export function configurarFormulario() {
    const formulario = document.getElementById("formulario-cadastro");

    if (!formulario) {
        return;
    }

    formulario.addEventListener("submit", function (event) {
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

        salvarCadastro(cadastro);

        alert("Cadastro salvo com sucesso!");
    });

    restaurarCadastro();
}

function restaurarCadastro() {
    const cadastro = carregarCadastro();

    if (!cadastro) {
        return;
    }

    document.getElementById("nome").value = cadastro.nome;
    document.getElementById("cpf").value = cadastro.cpf;
    document.getElementById("email").value = cadastro.email;
    document.getElementById("data-nascimento").value = cadastro.dataNascimento;
    document.getElementById("telefone").value = cadastro.telefone;
    document.getElementById("cep").value = cadastro.cep;
    document.getElementById("endereco").value = cadastro.endereco;
    document.getElementById("numero").value = cadastro.numero;
    document.getElementById("cidade").value = cadastro.cidade;
    document.getElementById("estado").value = cadastro.estado;
    document.getElementById("participacao").value = cadastro.participacao;
}
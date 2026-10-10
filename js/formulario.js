import { salvarCadastro, carregarCadastro, limparCadastro } from "./storage.js";

// chave salva -> id do campo no HTML
const CAMPOS = {
    nome: "nome",
    cpf: "cpf",
    email: "email",
    dataNascimento: "data-nascimento",
    telefone: "telefone",
    cep: "cep",
    endereco: "endereco",
    numero: "numero",
    cidade: "cidade",
    estado: "estado",
    participacao: "participacao"
};

export function cpfValido(cpf) {
    const d = cpf.replace(/\D/g, "");

    if (d.length !== 11 || /^(\d)\1{10}$/.test(d)) {
        return false;
    }

    for (const t of [9, 10]) {
        let soma = 0;
        for (let i = 0; i < t; i++) {
            soma += Number(d[i]) * (t + 1 - i);
        }
        if (((soma * 10) % 11) % 10 !== Number(d[t])) {
            return false;
        }
    }

    return true;
}

export function configurarFormulario() {
    const formulario = document.getElementById("formulario-cadastro");

    if (!formulario) {
        return;
    }

    const mensagem = document.getElementById("mensagem-cadastro");
    const cpf = document.getElementById("cpf");

    function validarCpf() {
        const completo = cpf.value.length === 14;
        cpf.setCustomValidity(completo && !cpfValido(cpf.value) ? "CPF inválido." : "");
    }

    cpf.addEventListener("input", validarCpf);

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const cadastro = {};
        for (const [chave, id] of Object.entries(CAMPOS)) {
            cadastro[chave] = document.getElementById(id).value;
        }

        const ok = salvarCadastro(cadastro);
        mensagem.textContent = ok
            ? "Cadastro salvo com sucesso!"
            : "Não foi possível salvar o cadastro neste navegador.";
    });

    formulario.addEventListener("reset", function () {
        limparCadastro();
        mensagem.textContent = "";
    });

    restaurarCadastro();
    validarCpf();
}

function restaurarCadastro() {
    const cadastro = carregarCadastro();

    if (!cadastro) {
        return;
    }

    for (const [chave, id] of Object.entries(CAMPOS)) {
        document.getElementById(id).value = cadastro[chave] ?? "";
    }
}

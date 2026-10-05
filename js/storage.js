export function salvarCadastro(cadastro) {
    localStorage.setItem("cadastro", JSON.stringify(cadastro));
}

export function carregarCadastro() {
    const dadosSalvos = localStorage.getItem("cadastro");

    if (!dadosSalvos) {
        return null;
    }

    return JSON.parse(dadosSalvos);
}
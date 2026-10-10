const CHAVE = "cadastro";

export function salvarCadastro(cadastro) {
    try {
        localStorage.setItem(CHAVE, JSON.stringify(cadastro));
        return true;
    } catch (erro) {
        return false;
    }
}

export function carregarCadastro() {
    try {
        const dados = localStorage.getItem(CHAVE);
        return dados ? JSON.parse(dados) : null;
    } catch (erro) {
        return null;
    }
}

export function limparCadastro() {
    try {
        localStorage.removeItem(CHAVE);
    } catch (erro) {
        /* sem armazenamento disponível */
    }
}

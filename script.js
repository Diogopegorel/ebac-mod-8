// Array que irá armazenar os contatos
let contatos = [];

// Função para adicionar um novo contato à tabela
function adicionarContato() {
    // Obter os valores do formulário
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;

    // Criar um objeto para representar o contato
    let contato = {nome: nome, telefone: telefone};

    // Adicionar o contato ao array
    contatos.push(contato);

    // Limpar o formulário
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";

    // Adicionar o contato à tabela
    let tabela = document.getElementById("contatos");
    let linha = tabela.insertRow();
    let colunaNome = linha.insertCell();
    let colunaTelefone = linha.insertCell();
    colunaNome.innerText = nome;
    colunaTelefone.innerText = telefone;
}
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Declaração do array
let amigos = [];

// Função para adicionar amigos:
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // Captura e remove espaços extras

    if (nome === "") {
        alert("Por favor, insira um nome."); // Exibe mensagem de erro
        return;
    }

    amigos.push(nome); // Adiciona o nome ao array
    input.value = ""; // Limpa o campo de entrada
    atualizarLista(); // Atualiza a lista na tela
}

// Função para atualizar a lista na tela:
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de adicionar novos elementos

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li"); // Cria um elemento <li>
        item.textContent = amigos[i]; // Define o texto como o nome do amigo
        lista.appendChild(item); // Adiciona o <li> à lista
    }
}

//Função para sortear um amigo:
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear."); // Valida se há amigos na lista
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório
    let amigoSorteado = amigos[indiceSorteado]; // Obtém o nome correspondente

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`; // Exibe o resultado na tela
}

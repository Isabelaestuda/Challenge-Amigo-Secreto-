let amigo = [];
let resultado = document.getElementById("resultado");

function adicionarAmigo() {
    let nomeDoAmigo = document.querySelector('input').value; // Captura o valor do campo de entrada

    if (nomeDoAmigo === '') {
        resultado.innerHTML = "Por favor, insira um nome.";
        resultado.style.color = "red";
        return;
    } 
    if (amigo.includes(nomeDoAmigo)) {
        resultado.innerHTML = "Por favor, digite um nome diferente do outro!";
        resultado.style.color = "red";
        return; 
    }

    amigo.push(nomeDoAmigo); // Atualiza o array de amigos
    resultado.innerHTML = "Nome adicionado com sucesso!";
    resultado.style.color = "green";

    atualizarListaAmigos(); // Atualiza a lista de amigos
    limparCampo(); // Limpa o campo de entrada
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista existente
    amigo.forEach(nome => {
        const novoItem = document.createElement("li");
        novoItem.textContent = nome;
        listaAmigos.appendChild(novoItem);
    });
}

function limparCampo() {
    document.querySelector('input').value = ''; // Limpa o campo de entrada
}

function sortearAmigo() {

        if (amigo.length === 0) {
            resultado.innerHTML = "A lista está vazia, adicione amigos antes de sortear!";
            resultado.style.color = "red";
            return;
        }
        
        if (amigo.length === 1) { // Se houver apenas um nome
            resultado.innerHTML = "Só há um amigo na lista, sorteio impossível!";// imprime essa mensagem no resultado
            resultado.style.color = "red"; // texto com cor vermelha
            return;//retorna 
            
        }
    
 

    let indiceSorteado = Math.floor(Math.random() * amigo.length); // Sorteia um nome
    let amigoSorteado = amigo[indiceSorteado]; // Pega o nome da lista

    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`; // Imprime no resultado
    resultado.style.color = "green"; // Texto com cor verde

    // Remove o amigo sorteado do array
    amigo.splice(indiceSorteado, 1);

    // Atualiza a lista de amigos na interface
    atualizarListaAmigos();
}
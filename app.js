const adicionarBtn = document.getElementById("button-add");
const sortearBtn = document.getElementById("button-draw");
const entrada = document.getElementById("amigo");
const resultado = document.getElementById("resultado");
const lista = document.getElementById("listaAmigos");
const mensagem = document.getElementById("mensagem");

let amigos = [];

adicionarBtn.addEventListener("click", adicionarAmigo);
sortearBtn.addEventListener("click", sortearAmigo);

function adicionarAmigo() {
    resultado.innerHTML = "";

    let nome = entrada.value; 

    if (nome == "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse amigo já foi adicionado.");
        return;
    }

    amigos.push(entrada.value);
    entrada.value = "";
    atualizarLista();
}

function atualizarLista() {
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        lista.innerHTML +=  `<li>${amigo}</li>`;
    })
}

function sortearAmigo() {
    const tamanho = amigos.length;

    if (tamanho == 0) {
        alert("Não foi adicionado amigo.");
        return;
    }
    
    const indice = Math.floor(Math.random() * tamanho);
    const amigoSorteado = amigos[indice];
    lista.innerHTML = "";
    amigos = [];
    resultado.innerHTML = `<li>Seu amigo secreto é ${amigoSorteado}</li>`;
}

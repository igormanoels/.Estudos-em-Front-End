let listaAmigos = [];
let amigosSorteados = [];


function adicionarAmigo() {
    listaAmigos.push(document.querySelector("#amigo").value);

    let amigosAdcionados = "Amigos já Adcionados: ";
    for (let i = 0; i < listaAmigos.length; i++) {
        amigosAdcionados += listaAmigos[i] + " | ";
    }

    document.getElementById('amigo').value = "";
    document.querySelector("#listaAmigos").innerHTML = amigosAdcionados;        
    document.getElementById('sortear').removeAttribute('disabled');

}


function sortearAmigo(){
    let sorteio = null;
    let msgSorteados = "Amigos já sorteados: ";

    if (listaAmigos.length === 0) {
        reiniciarSorteio();
    } else {
        let posicao = parseInt(Math.random() * listaAmigos.length);
        sorteio = listaAmigos[posicao];
        amigosSorteados.push(listaAmigos[posicao]);
        
        amigosSorteados.forEach(function(amigo){
            msgSorteados += amigo + " | ";
        }); // Comparado com java, isso é terrivelmente horroroso.
        document.querySelector('#resultado').innerHTML = msgSorteados;
        
        listaAmigos.splice(posicao, 1);
        
        if(listaAmigos.length === 0){
            document.getElementById('txtSortear').innerHTML = 'Reiniciar Sorteio';
        }
    }
    
}


function reiniciarSorteio() {
    listaAmigos = [];
    amigosSorteados = [];
    document.querySelector('#listaAmigos').innerHTML = "";
    document.querySelector('#resultado').innerHTML = "";
    document.getElementById('txtSortear').innerHTML = 'Sortear amigo';
    document.getElementById('sortear').setAttribute('disabled', true);
    alert("O sorteio foi reiniciado!");
}


document.getElementById('sortear').setAttribute('disabled', true);


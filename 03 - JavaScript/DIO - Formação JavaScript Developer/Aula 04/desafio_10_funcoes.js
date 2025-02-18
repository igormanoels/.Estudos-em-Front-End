
let numerosSorteados = [];


function gerarNumero() {
    return ((Math.random() * 100)).toFixed(0); // Não esquecer que o toFixed converte os números para String
}


function adcionaNumero(numero) {
    numerosSorteados.push(Number(numero)); // Converte o número de volta para Number
}


function ordenarNumero(){
    numerosSorteados.sort((a, b) => a - b);
    console.log(numerosSorteados)
}


// Função a ser exportada
function iniciarSorteio(qtd) {
    
    for (let i = 0; i < qtd; i++) {
        adcionaNumero(gerarNumero());          
    }

    ordenarNumero();

    return numerosSorteados[numerosSorteados.length - 1];
}


// Função que será exportada (à exemplo do public em java)
module.exports = {iniciarSorteio};



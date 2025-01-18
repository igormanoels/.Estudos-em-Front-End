let listaDeNumerosSorteados = []; // Lista vazia
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

mensagemInicial();

/*
Manipulando o HTML diretamente para variável
let titulo = document.querySelector('h1');
titulo.innerHTML = "Jogo do número secreto";

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = "Escolha um número entre 1 e 10";
*/

// Função com parametro
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}


function mensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}


// Função em JS - Sem parametro
function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa"; 
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}.`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", `O número secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela("p", `O número secreto é maior que ${chute}`);                    
        }
        tentativa++;
        limparCampo();
    }

}


function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let tamanhoLista = listaDeNumerosSorteados.length;
    if(tamanhoLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    // A função includes verifica se o parametro está contido em uma lista
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        // Adciona um parametro ao final da lista
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }

}


function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}


function reiniciarJogo(){
    gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
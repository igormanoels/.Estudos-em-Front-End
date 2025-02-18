/* 
    Desafio
    Faça um programa que receba N (quantidade de números) e seus respectivos valores. 
    Imprima o maior número par e o menor número impar. 

    Entrada
    A entrada consiste em um arquivos de teste, a primeira linha receberá um valor N, 
    referente quantidade de números que terá de entranda, as linhas seguintes terão os valores 
    númericos maiores ou iguais a zero, podendo o número ser par ou impar. Conforme mostrado no exemplo de entrada a seguir.

    Saída
    Para cada arquivo da entrada, terá um arquivo de saída. E como mencionado no Desafio, 
    a saída deverá retornar a mensagem "Maior número par: {numero}" com o maior valor par após 
    o final do texto,  e "Menor número ímpar: {numero}" com o menor valor ímpar após o final do texto. 
    Use o exemplo abaixo para clarear o que está sendo pedido.
*/


// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;

const N = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 1;

for (let i = 0; i < N; i++) {
  const numero = parseInt(gets());

  if (numero % 2 == 0) {
    if (numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
    }
  } else {
    if (numero < menorNumeroImpar) {
      menorNumeroImpar = numero;
    }
  }
  // TODO: Criar a condição e regras para identificar também o "menorNumeroImpar".
}

// TODO: Imprima as saídas conforme o enunciado deste desafio.
console.log("Maior número par: " + maiorNumeroPar);

console.log("Menor número impar: " + menorNumeroImpar);

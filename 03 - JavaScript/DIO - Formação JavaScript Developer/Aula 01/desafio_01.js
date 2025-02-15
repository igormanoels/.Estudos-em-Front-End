/* Faca um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem. */

const precoCombustivel = 5.79;
let gastoMedio = 10.5;
let distanciaViagem = 303;

let custoViagem = ((precoCombustivel * distanciaViagem) / gastoMedio);

console.log("Custo da viagem R$ " + custoViagem.toFixed(2)); // Essa função faz o arredondamento para duas casas deciamais




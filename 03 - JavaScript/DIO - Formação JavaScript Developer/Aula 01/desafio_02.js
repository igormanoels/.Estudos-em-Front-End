/* Faca um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo do combustivel que está no seu carro;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem. */

const gasolina = 5.49;
const etanol = 3.89;
let custoViagem;

let tipoCombustivel = 0;
let distanciaViagem = 307;
let totalLitros = 67;


if (tipoCombustivel == 0) {
    custoViagem = ((gasolina * totalLitros) / distanciaViagem);
} else {
    custoViagem = ((etanol * totalLitros) / distanciaViagem);    
}

console.log('Custo da viagem: R$ ' + custoViagem.toFixed(2));




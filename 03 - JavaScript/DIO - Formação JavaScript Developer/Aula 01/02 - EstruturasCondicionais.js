/*
=       Atribuição → Utilizado para atribuir um valor a uma variável.
==      Comparação implícita → Compara os valores, mas faz conversão de tipo automaticamente.
===     Comparação explícita ou estrita → Compara valor e tipo, sem conversão automática.
*/

const numPar = 3;
var verNumero = (numPar % 2) === 0; // retorna um valor boleano - true ou false

console.log(verNumero + '\n'); // quebra de linha 


if (numPar % 2 === 0) {
    console.log('O número é par.')
} else {
    console.log('O número é impar.')
}




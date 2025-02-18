let vetNumeroPares = [];
let vetNumerosImpares = [];

function verificarNumeros (vet) {
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] % 2 === 0) {
            vetNumeroPares.push(vet[i]);
        } else {
            vetNumerosImpares.push(vet[i]);
        }
    }

    ordenarNumeros();

    imprimirNumeros();
}


function ordenarNumeros(){
    vetNumeroPares.sort((a, b) => a - b);
    vetNumerosImpares.sort((a, b) => a - b);
    //    console.log(vetNumeroPares + '\n' + vetNumerosImpares);
}


function imprimirNumeros() {
    console.log(`Maior número par: ${vetNumeroPares[vetNumeroPares.length-1]} e Menor número impar: ${vetNumerosImpares[0]}`);
}



module.exports = {verificarNumeros, ordenarNumeros, imprimirNumeros};


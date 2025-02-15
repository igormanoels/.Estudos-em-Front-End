/*
2) calculo do IMC

imc = peso / (altura * altura)

condição:
- Abaixo de 18.5, Abaixo do peso
- Entre 18.5 e 25, peso normal
- Entre 25 e 30, acima do peso
- Entre 30 e 40, obeso
- Acima de 40, obesidade grave          */


let peso = 100;
let altura = 1.93;

imc = peso / (Math.pow(altura, 2));

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc < 25){
    console.log('Peso normal');
} else if (imc < 30) {
    console.log('Acima do peso');
} else if (imc < 40) {
    console.log('Obeso')
} else {
    console.log('Obesidade grave');
}



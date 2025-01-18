//Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo() {
    console.log("Olá, mundo!");
}


//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function saudacao(nome){
    console.log(`Olá, ${nome}`);
}


//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobrarNumero(numero){
    return parseInt(numero) * 2;
}


//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calculaMedia(numero1, numero2, numero3){
    let media = ((numero1 + numero2 + numero3) / 3);
    return media;
}

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function verificaMaiorNumero(num1, num2){
    if(num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}


//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function quadradoDoNumero(num){
    return Math.pow(num, 2);
}

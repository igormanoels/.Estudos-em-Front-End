//Desafios
//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
let altura = prompt("Informe sua altura: ");
let peso = prompt("Informe seu peso: ");

function calcularImc(alt, ps) {
    return (parseFloat(ps) / Math.pow(parseFloat(alt), 2));
}

let imc = calcularImc(altura, peso);
let mensagemImc = `O seu IMC é ${imc.toString()}`;
document.querySelector('h2').innerHTML = mensagemImc;





//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
let numero = prompt("Informe um número para cálcular seu fatorial: ");

function calculaFatorial(n){
    let fat = 0;
    if (n == 1 || n == 0) {
        return fat = 1;
    } else {
        fat = n * calculaFatorial(n - 1);
        console.log(`\n ${fat}`)
    }
    return fat;
}

let fatorial = calculaFatorial(parseInt(numero));
let msgFatorial = `O fatorial de ${numero} é ${fatorial}`;
document.querySelector('h2').innerHTML = msgFatorial;





//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
let cotacaoDolar = 4.8;
let valorParaConversao = parseFloat(prompt("Informe o valor que você quer converter para o real: "));

function converterParaDolar(dolar, real){
    return dolar * real;
}

let valorConvertido = converterParaDolar(cotacaoDolar, valorParaConversao);
let msgConversao = `O valor de $ ${valorParaConversao} doláres, convertido em reais será de R$ ${valorConvertido}`;
document.querySelector('h2').innerHTML = msgConversao;





//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
let altura2 = parseFloat(prompt("Informe a altura da sala: "));
let largura = parseFloat(prompt("Informe o valor da largura: "));

function calculaPerimetro(alt, larg){
    return 2 * (alt + larg);
}

function calculaArea(alt, larg){
    return alt * larg;
}

let msgRetangulo = `O valor total da área é de ${calculaArea(altura2, largura)}mts², e o perímetro é de ${calculaPerimetro(altura2, largura)}mts²`;
document.querySelector('h2').innerHTML = msgRetangulo;





//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
let raio = parseFloat(prompt("Informe o valor do raio da sala: "));

function calculaPerimetro1(r) {
  return 2 * Math.PI * r;
}

function calculaArea1(r) {
  return Math.PI * Math.pow(r, 2);
}

let msgCirculo = `O valor total da área é de ${calculaArea1(raio)}mts², e o perímetro é de ${calculaPerimetro1(raio)}mts²`;
document.querySelector('h2').innerHTML = msgCirculo;





//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
let tabuada = parseInt(prompt("Informe um valor para cálcular sua tabuada: "));
let num = 0;

function calcularTabuada(tab, num){
    return tab * num;
}

document.querySelector('h2').innerHTML = `Cálculando a tabuada do ${tabuada}...`;
while(num <= 10){
    calcularTabuada(tabuada, num);
    let msgTabuada = `${tabuada}x${num}=${calcularTabuada(tabuada, num)}`;
    alert(msgTabuada);
    num++;
}


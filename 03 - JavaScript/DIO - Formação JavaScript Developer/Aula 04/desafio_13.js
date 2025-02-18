/* 
    Faça um programa que cálcula e imprime o salário de um funcionário
        - receber o valor bruto
        - receber os valores dos beneficios
        - cálcular os valores dos impostos
            - <= 1100 = 5%
            - <= 2500 = 10%
            - outros 15%
        - use as funções com imports e exports
*/

const funcoes = require('./desafio_13_funcoes');


console.log(`Salário do Pedro: R$ ${funcoes.calcularSalario(1415).toFixed(2)}`);


console.log(`Salário do Bianca: R$ ${funcoes.calcularSalario(1715).toFixed(2)}`);


console.log(`Salário do Jessica: R$ ${funcoes.calcularSalario(2115).toFixed(2)}`);


console.log(`Salário do Flavia: R$ ${funcoes.calcularSalario(6435).toFixed(2)}`);


console.log(`Salário do Sophia: R$ ${funcoes.calcularSalario(2355).toFixed(2)}`);



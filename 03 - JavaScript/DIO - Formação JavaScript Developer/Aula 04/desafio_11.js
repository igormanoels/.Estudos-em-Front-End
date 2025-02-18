/* 
    Faça um programa que cálcula a média de um aluno utilizando as funções com imports e exports
*/

const funcoes = require('./desafio_11_funcoes');

let n1 = 4;
let n2 = 5;
let n3 = 6;
let n4 = 9;


let nota = funcoes.calcularMedia(n1, n2, n3, n4);


funcoes.verificaResultado(nota);




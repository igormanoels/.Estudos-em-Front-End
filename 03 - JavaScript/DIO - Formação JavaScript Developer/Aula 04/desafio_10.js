/* 
    Uma sala contem 5 alunos e para cada aluno foi sorteadoi um numero de 1 a 100.
    faça um programa que recebe os 5 numeros sorteados para os alunos e mostre o maior numero sorteado

    dada as entradas: 
    - 5
    - 10
    - 50 
    - 98 
    - 23

    saída:
    - 98
*/


const funcoes = require('./desafio_10_funcoes');
let qtdAlunosParticipantes = 5;


let maiorNumeroSorteado = funcoes.iniciarSorteio(qtdAlunosParticipantes);



console.log(`Maior número sorteado: ${maiorNumeroSorteado}`)





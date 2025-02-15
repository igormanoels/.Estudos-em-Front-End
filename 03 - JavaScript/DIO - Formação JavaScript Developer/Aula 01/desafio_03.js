/*
1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a
a sua média e a sua classificação conforme a tabela abaixo


Classificação:
- Média menor 5, reprovado;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre; */

let nota1 = 9;
let nota2 = 6;
let nota3 = 9;

let media = (nota1 + nota2 + nota3) / 3;

if(media < 5) {
    console.log('Reprovado.');
} else if (media < 7) {
    console.log('Recuperação.');
} else {
    console.log('Aprovado.');
}




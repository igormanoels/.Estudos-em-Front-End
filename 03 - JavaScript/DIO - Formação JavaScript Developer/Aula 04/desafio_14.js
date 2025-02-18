/* 
    Desafio
    Faça um programa que receba a média de um aluno e imprima o seguinte:

    Caso a média seja < 5 imprima "REP";
    Caso a média seja >= 5 e < 7 imprima "REC";
    Caso a média seja >7 imprima "APR".
    Entrada
    A entrada consiste em vários arquivos de teste, cada um com uma linha, que conterá o valor da média do aluno. Conforme mostrado no exemplo de entrada a seguir.

    Saída
    Para cada arquivo da entrada, terá um arquivo de saída. E como mencionado no Desafio, será gerado uma linha com a palavra "Reprovado" caso sua média seja < 5, "Recuperação" caso sua média seja >= 5 e < 7 e "Aprovado" caso a média seja > 7. Use o exemplo abaixo para clarear o que está sendo pedido.

    Exemplos
    A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.
*/

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let media = parseFloat(gets());

if (media < 5) {
  print("REP");
} else if (media >= 5 && media < 7) {
  print("REC");
} else {
  print("APR");
}

// TODO: Criar demais condições para a resolução deste desafio.

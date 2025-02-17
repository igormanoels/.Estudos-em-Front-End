

const notasAluno = [1, 2, 4, 5, 6, 3, 7, 3, 8];

let tamanhoLista = notasAluno.length;
console.log(tamanhoLista);


// Usando for para calcular a média
let somaNotas1 = 0;
for (let i = 0; i < notasAluno.length; i++) {
    somaNotas1 += notasAluno[i];
    //console.log(notasAluno[i])
}
let media1 = somaNotas1 / tamanhoLista;
console.log('Média com for: ' + media1)




let somaNotas2 = 0;
let contador = 0;
while(contador < tamanhoLista) {
    somaNotas2 += notasAluno[contador];
    //console.log(notasAluno[contador]);
    contador++;
}
let media2 = somaNotas2 / tamanhoLista;
console.log('Média com while: ' + media2.toFixed(2))
 


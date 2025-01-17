// passa uma menssagem para o usuário
alert("Boas Vindas ao jogo do número secreto.");

// Também funciona com var numeroSecreto, porém a atribuição de var deve ser voltado para variáveis globais
// 
let numeroSecreto = 29;
console.log(numeroSecreto)

// Recebe o valor da entrada do usuário
let palpite = prompt("Informe o seu chute!");

if (palpite == numeroSecreto) {
//  outra forma //  
//  alert(`Você descobriu o número secreto! O número é " + numeroSecreto});
    alert(`Você descobriu o número secreto! O número é ${numeroSecreto}`);
} else {
    alert("Você errou :(")
}

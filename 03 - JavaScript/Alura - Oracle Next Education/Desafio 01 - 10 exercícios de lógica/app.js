// PRIMEIRA PARTE
//Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
alert("Boas vindas ao nosso site!");

//Declare uma variável chamada nome e atribua a ela o valor "Lua".
let nome = "Lua";

//Crie uma variável chamada idade e atribua a ela o valor 25.
let idade = 25;

//Defina uma variável numeroDeVendas e atribua a ela o valor 50.
let numeroDeVendas = 50.0;

//Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
let saldoDisponivel = 1000.00;

//Exiba um alerta com o texto "Erro! Preencha todos os campos"
alert("Erro! Preencha todos os campos");

//Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);

//Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
let nomeUsuario = prompt("Informe seu nome: ");

//Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
let idadeUsuario = prompt("Agora informe sua idade: ");

//Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
if (idadeUsuario >= 18) {
    alert("Pode tirar a habilitação.");
} else {
    alert("Ainda não pode tirar a habilitação.");
}






// SEGUNDA PARTE
//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaSemana = prompt("Qual é o dia da semana?");
if (diaSemana == "Sábado" || diaSemana == "Domingo") {
    alert("Bom final de semana!");
} else {
    alert("Boa semanha!");
}

//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt("Informe o número desejado");
if (numero >= 0) {
    alert("O número é positivo");
} else {
    alert("O número é negativo");
}

//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao = prompt("Informe o total de pontos conquistados: ");
if (pontuacao >= 100) {
    alert("Parabéns, você venceu!");
} else {
    alert("Tente novamente para ganhar.");
}

//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldo = 43.23;
alert(`Saldo atual da conta corrente R$ ${saldo}`);

//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nomeUsuario2 = prompt("Informe o seu nome: ");
alert(` ${nomeUsuario2}, seja bem vindo!`);

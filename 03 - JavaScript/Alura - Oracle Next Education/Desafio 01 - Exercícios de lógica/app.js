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






// TERCEIRA PARTE
//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;
while(contador <= 10){
    console.log(`\nContando... ${contador}`);
    contador++;
}

console.log("\n\nNova contagem");
//Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
while(contador > 0) {
    contador--;
    console.log(`\nContando... ${contador}`)
}

//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let numeroContagem = prompt("Informe um número para iniciar a contagem: ");
while(numeroContagem >= 0) {
    alert(`Contagem regressiva: ${numeroContagem}`);
    numeroContagem--;
}

//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let numeroContagem2 = prompt("Informe um novo número para iniciar a contagem: ");
let contador1 = 0;
while(contador1 <= numeroContagem2){
    alert(`Contagem progressiva ${contador1}`);
    contador1++;
}






//Desafio final
//Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log("Seja bem vindo a minha lista de exercícios");

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let meuNome = "Igor Manoel";
console.log(`Olá, ${meuNome}!`);

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
alert(`Olá, ${nome}!`);

//Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagem = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(linguagem);

//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado 
// em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 2;
let valor2 = 5;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado 
// em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}`);

//Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let minhaIdade = prompt("Informe sua idade: ");
if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let meuNumero = prompt("Informe um número a sua escolha: ");
if (meuNumero == 0) {
  console.log("O número informado é zero.");
} else {
  if (meuNumero < 0) {
    console.log("O número informado é negativo.");
  } else {
    console.log("O número informado é positivo.");
  }
}

//Use um loop while para imprimir os números de 1 a 10 no console.
let numeros = 1;
while(numeros <= 10) {
    console.log(`${numeros} `);
    numeros++;
}

//Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 10;
if (nota >= 7) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}

//Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
console.log(`Qualquer número aleatório: ${Math.random()}`)

//Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
console.log(`Número aleatório entre 1 e 10: ${parseInt((Math.random() * 10 + 1))}`)

//Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
console.log(`Número aleatório entre 1 e 10: ${parseInt(Math.random() * 1000 + 1)}`);

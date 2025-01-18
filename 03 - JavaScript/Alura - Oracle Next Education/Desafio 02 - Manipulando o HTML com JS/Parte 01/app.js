//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio";


//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function btnConsole() {
    console.log("O botão do console foi pressionado.");
}


//Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function btnAlerta() {
    alert("Eu amo JS!");
}


//Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, 
// exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function btnPrompt() {
    let cidade = prompt("Informe o nome da cidade de onde você está falando: ");
    alert(`Estive em ${cidade} e lembrei de você`);
}


//Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function btnSoma() {
    let numero1 = prompt('Informe o primeiro número: ');
    let numero2 = prompt('Informe o segundo número: ');
    let resultado = parseInt(numero1) + parseInt(numero2);
    alert(`Resultado: ${numero1}+${numero2}=${resultado}`);
}

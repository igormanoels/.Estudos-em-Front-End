/* 
    - Crie uma classe pessoa
    - Atributos: Nome, Peso e altura
    - Instancie uma pessoa e faça com que ela forneça seu peso e altura a partir de uma função
*/

class Pessoa {
    nome;
    peso;
    altura;
    imc;

    constructor (nm, ps, alt) {
        this.nome = nm;
        this.peso = ps;
        this.altura = alt;
    };

    calcularImc () {
        this.imc = (this.peso / (Math.pow(this.altura, 2))).toFixed(2);
    };
}

const paciente = new Pessoa('Igor', 120, 1.83);

paciente.calcularImc();

console.log(`O imc do ${paciente.nome} é ${paciente.imc} `);


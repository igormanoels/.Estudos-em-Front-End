// utilizando classe sem construtor
class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome}, eu tenho ${this.idade} anos.`);
    }
}

const igor = new Pessoa();
igor.nome = "Igor Manoel";
igor.idade = 30;

const maria = new Pessoa();
maria.nome = "Maria";
maria.idade = 21;

igor.descrever();
maria.descrever();




// utilizando classe com construtor
class Carro {
    modelo;
    ano;

    constructor(mod, ano) {
        this.modelo = mod;
        this.ano = ano;
    };

    descrever() {
        console.log(`Modelo: ${this.modelo} - Ano: ${this.ano}`);
    };
}

const mercedes = new Carro("Mercedes", 2020);
mercedes.descrever();

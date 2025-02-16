const pessoa = {
    nome: 'Igor Manoel',
    idade: 30,
    cidade: 'São Paulo',

    // Podem ser escritas funções para os objetos criados
    descrever: function() {
        console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
};

console.log(pessoa)


// para adcionar atributos ao objeto
pessoa.altura = 1.83;
console.log(pessoa);


// removendo atributos do objeto
delete pessoa.cidade;
console.log(pessoa);


// acessando a função
pessoa.descrever();


// acessando o atributo, não esquecer de usar aspas simples no acesso dinamico
console.log(pessoa['nome']);
console.log(pessoa.nome);
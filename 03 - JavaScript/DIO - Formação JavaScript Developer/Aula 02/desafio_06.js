/*
    - Crie uma classe para representar um carros. 
    - Os carros possuem uma marca, uma cor e um gasto medio de combustivel por km.
    - crie um método que dado a quantidade de km e o preço do combustivel para verificar o valor gasto em reais para realizar um percurso.
*/


class Carro {
    marca;
    cor;
    gastoMedio;

    calcularGasto(km, preco) {
        this.gastoMedio = (preco / km).toFixed(2);
    };
}

let meuCarro = new Carro();
meuCarro.marca = 'Volks';
meuCarro.cor = 'preto';

meuCarro.calcularGasto(55, 155);



console.log(meuCarro);




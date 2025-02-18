

function calcularMedia (valor1, valor2, valor3, valor4) {
    let somaValores = valor1 + valor2 + valor3 + valor4;
    let media = somaValores / 4;
    return media;
}


function verificaResultado(notaFinal) {
    if (notaFinal < 5) {
        console.log('Reprovado');
    } else if (notaFinal < 7) {
        console.log('Exame');
    } else {
        console.log('Aprovado');
    }
}


module.exports = {calcularMedia, verificaResultado};



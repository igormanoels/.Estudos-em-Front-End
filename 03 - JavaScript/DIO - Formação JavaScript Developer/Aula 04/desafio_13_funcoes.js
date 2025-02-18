

function calcularSalario(salario) {
    let salarioFinal = 0;

    if (salario <= 1100) {
        salarioFinal = salario * 0.95;
    } else if (salario <= 2500) {
        salarioFinal = salario * 0.9;
    } else {
        salarioFinal = salario * 0.85;
    }

    return salarioFinal;
}


module.exports = {calcularSalario};



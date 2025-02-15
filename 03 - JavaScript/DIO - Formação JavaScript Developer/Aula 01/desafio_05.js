/* 
3) Cálcule o desconto de um produto

Condição.
- A vista - débito, 10% de desconto
- A vista - dinheiro ou pix, 5% de desconto
- Em duas vezes, preço normal
- Acima de duas vezes, juros de 10%     */

let formaPagamento = 'vista';
let metodoPagamento = 'pix';
let parcelas = 2;

let valorCompra = 1000;
let valorPagamento;


if (formaPagamento === 'vista') {
    if (metodoPagamento === 'debito') {
        valorPagamento = valorCompra * 0.9;
    } else if (metodoPagamento === 'pix' || metodoPagamento === 'dinheiro') {
        valorPagamento = valorCompra * 0.95;
    } else {
        console.log('Método de pagamento inválida.')
    }
} else if (formaPagamento === 'prazo'){
    if (parcelas <= 2) {
        valorPagamento = valorCompra;
    } else {
        valorPagamento = valorCompra * 1.1;
    }
} else {
    console.log('Forma de pagamento inválida.')
}

console.log('Valor final para pagamento, R$ ' + valorPagamento.toFixed(2));


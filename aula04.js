const pedidos = [450, 620, 520, 1200, 89.90, 499.99, 3599.60];

let faturamento = 0;
let pedidosFreteGratis = 0;
let maiorPedido = 0;

for (let i = 0; i < pedidos.length; i++) {
    const valorPedido = pedidos[i];

    const frete = valorPedido >= 500 ? 0 : 29.90;

    faturamento += valorPedido + frete;

    if (frete === 0) {
        pedidosFreteGratis++;
    }

    if (valorPedido > maiorPedido) {
        maiorPedido = valorPedido;
    }

    const statusFrete = frete === 0 ? "Frete gratis" : `Frete R$ ${frete.toFixed(2).replace('.', ',')}`;
    console.log(`Pedido ${i + 1}: R$ ${valorPedido.toFixed(2).replace('.', ',')} | ${statusFrete}`);
}

console.log("------------------------------");
console.log(`Faturamento:      R$ ${faturamento.toFixed(2).replace('.', ',')}`);
console.log(`Pedidos com frete gratis: ${pedidosFreteGratis}`);
console.log(`Maior pedido:     R$ ${maiorPedido.toFixed(2).replace('.', ',')}`);

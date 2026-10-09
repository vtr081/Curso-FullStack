const nomes = ["Mouse", "Teclado", "Headset", "Webcam", "Monitor 24\""];
const valores = [49.90, 189.90, 229.90, 159.90, 899.90];

function precoDe(item) {
    const index = nomes.indexOf(item);
    return index !== -1 ? valores[index] : null;
}

function adicionar(carrinho, item) {
    carrinho.push(item);
}

function remover(carrinho, item) {
    const index = carrinho.indexOf(item);

    if (index === -1) {
        return false;
    }

    carrinho.splice(index, 1);
    return true;
}

function calcularSubtotal(carrinho) {
    let subtotal = 0;
    for (const item of carrinho) {
        const preco = precoDe(item);
        if (preco !== null) {
            subtotal += preco;
        }
    }
    return subtotal;
}

function calcularFrete(subtotal) {
    return subtotal >= 500.00 ? 0 : 29.90;
}
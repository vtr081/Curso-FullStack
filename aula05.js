for (let i = 0; i < carrinho.length; i++) {
    const item = carrinho[i];
    const indiceNoCatalogo = nomes.indexOf(item);

    if (indiceNoCatalogo !== -1) {

        const preco = valores[indiceNoCatalogo];
        subtotal += preco;
        totalItens++;
        console.log(`${item} R$ ${preco.toFixed(2)}`);
    } else {

        console.log(`Não encontrado: ${item}`);
    }
}

const valorFrete = subtotal >= 500 ? 0 : 29.90;
const totalGeral = subtotal + valorFrete;

console.log("-------------------------");
console.log(`Itens:     ${totalItens}`);
console.log(`Subtotal:  R$ ${subtotal.toFixed(2)}`);
console.log(`Frete:     R$ ${valorFrete.toFixed(2)} `);
console.log("-------------------------");
console.log(`TOTAL:     R$ ${totalGeral.toFixed(2)}`);
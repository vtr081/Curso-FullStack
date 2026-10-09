class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    vender(qtd) {
        return false;
    }

    calcularFrete(qtd) {
        return 0;
    }
}

class ProdutoFisico extends Produto {
    #estoque; //encapsulamento

    constructor(nome, preco, estoque) {
        super(nome, preco);
        this.#estoque = estoque; 
    }

    get estoque() {
        return this.#estoque;
    }

    vender(qtd) {
        if (this.#estoque >= qtd) {
            this.#estoque -= qtd; 
        }
        return false;
    }

    calcularFrete(qtd) {
        return 15 * qtd;
    }
}

class CursoOnline extends Produto {
    constructor(nome, preco, link) { 
        super(nome, preco);
        this.link = link;
    }

    vender(qtd) {
        return true;
    }

    calcularFrete(qtd) {
        return 0;
    }
}

class Carrinho {
    constructor() {
        this.itens = []; 
    }

    adicionar(produto, qtd) {
        const vendido = produto.vender(qtd);
        if (vendido) {
            this.itens.push({ produto, qtd });
        }
        return vendido;
    }
    calcularSubtotal() { 
        return this.itens.reduce((acc, item) => acc + item.produto.preco * item.qtd, 0);
    }
    calcularFrete() {
        return this.itens.reduce((acc, item) => acc + item.produto.calcularFrete(item.qtd), 0);
    }
    calcularTotal() {
        return this.calcularSubtotal() + this.calcularFrete();
    }
}
class Pedido {
    constructor(carrinho) {
        this.carrinho = carrinho;
    }
    calcularTotalFormaPagamento(metodo) {
        const total = this.carrinho.calcularTotal();
        const metodoFormatado = metodo.toLowerCase();

        if (metodoFormatado === "pix") {
            return total * 0.95; // 5% de desconto
        } else if (metodoFormatado === "boleto") {
            return total + 3.50; // Taxa do boleto
        }
        return total;
    }
}

const headset = new ProdutoFisico("Headset", 229.90, 4);
const mouse = new ProdutoFisico("Mouse", 49.90, 15);
const cursoJS = new CursoOnline("Curso JS", 197.00, "https://");
const webcam = new ProdutoFisico("Webcam", 159.90, 0);

const carrinho = new Carrinho();
console.log("adicionar:");
console.log("Headset:", carrinho.adicionar(headset, 1));
console.log("Mouse:", carrinho.adicionar(mouse, 2));
console.log("Curso JS:", carrinho.adicionar(cursoJS, 1));
console.log("Webcam:", carrinho.adicionar(webcam, 1));

console.log("\nSubtotal: R$", carrinho.calcularSubtotal().toFixed(2));
console.log("Frete: R$", carrinho.calcularFrete().toFixed(2));
console.log("Total: $", carrinho.calcularTotal().toFixed(2));

const pedido = new Pedido(carrinho);
console.log("--------------------------------");
console.log("Pix: R$", pedido.calcularTotalFormaPagamento('Pix').toFixed(2));
console.log("Cartao: R$", pedido.calcularTotalFormaPagamento('Cartao').toFixed(2));
console.log("Boleto: R$", pedido.calcularTotalFormaPagamento('Boleto').toFixed(2));

console.log(`\nEstoque restante Headset: ${headset.estoque} | Mouse: ${mouse.estoque}`);
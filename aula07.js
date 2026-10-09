class Carrinho {
    constructor() {
        this.itens = [];
    }

    adicionar(produto, qtd) {
        if (!produto.vender(qtd)) {
            console.log(`Não foi possível adicionar`);
            return false;
        }

        const itemExistente = this.itens.find(item => item.produto.nome === produto.nome);

        if (itemExistente) {
            itemExistente.qtd += qtd;
        } else {
            this.itens.push({ produto, qtd });
        }

        console.log(`${qtd} de ${produto.nome} adicionado`);
        return true;
    }

    remover(produto, qtd) {
        if (qtd <= 0) {
            console.log("Quantidade inválida");
            return false;
        }

        const index = this.itens.findIndex(item => item.produto.nome === produto.nome);

        if (index !== -1) {
            const item = this.itens[index];

            if (item.qtd > qtd) {
                item.qtd -= qtd;
            } else {
                this.itens.splice(index, 1);
            }

            console.log(`${qtd} de ${produto.nome} removido`);
            return true;
        }

        console.log("Produto não encontrado no carrinho");
        return false;
    }

    subtotal() {
        return this.itens.reduce((acc, item) => acc + (item.produto.preco * item.qtd), 0);
    }

    frete() {
        return 15.00;
    }

    total() {
        return this.subtotal() + this.frete();
    }
}
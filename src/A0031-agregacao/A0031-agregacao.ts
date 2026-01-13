
// A0031 - Agregação

export class CarrinhoDeCompras {
    private readonly produtos: Produto[] = [];

    inserirProdutos(...produtos: Produto[]): void {
        for (const produto of produtos) {
            this.produtos.push(produto);
        }
    }
}

export class Produto {
    constructor(public nome: string, public preco: number) {}
}

const produto01 = new Produto('Caneta', 2.5);

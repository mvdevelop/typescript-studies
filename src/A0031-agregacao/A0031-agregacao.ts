
// A0031 - Agregação

export class CarrinhoDeCompras {
    private readonly produtos: Produto[] = [];

    inserirProdutos(...produtos: Produto[]): void {
        for (const produto of produtos) {
            this.produtos.push(produto);
        }
    }

    quantidadeDeProdutos(): number {
        return this.produtos.length;
    }

    valorTotal(): number {
        return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
    }
}

export class Produto {
    constructor(public nome: string, public preco: number) {}
}

const produto01 = new Produto('Caneta', 2.5);
const produto02 = new Produto('Borracha', 1.5);
const produto03 = new Produto('Caderno', 10.0);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProdutos(produto01, produto02, produto03);
console.log(carrinhoDeCompras.valorTotal());
console.log(carrinhoDeCompras.quantidadeDeProdutos());

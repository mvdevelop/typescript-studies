
export class Empresa {
    public readonly nome: string;
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cnpj: string;

    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }
}

export class Colaborador {}

const empresa01 = new Empresa('19SL', '11.111.111/0001-11');
console.log(empresa01);
console.log(empresa01.nome);

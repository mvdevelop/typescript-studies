
export class Empresa {
    readonly nome: string; // public não necessário, é o padrão
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cnpj: string;

    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }

    adicionarColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador);
    }

    mostrarColaboradores(): void {
        for (const colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }
}

export class Colaborador {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
    ) {}
}

const empresa01 = new Empresa('19SL', '11.111.111/0001-11');
const colaborador01 = new Colaborador('João', 'Silva');
const colaborador02 = new Colaborador('Maria', 'Oliveira');
const colaborador03 = new Colaborador('José', 'Santos');
empresa01.adicionarColaborador(colaborador01);
empresa01.adicionarColaborador(colaborador02);
empresa01.adicionarColaborador(colaborador03);
console.log(empresa01);

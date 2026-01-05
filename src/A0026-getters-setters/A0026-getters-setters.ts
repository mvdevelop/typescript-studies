
export class Pessoa {
    constructor(
        private nome: string,
        private sobrenome: string,
        private idade: number,
        private _cpf: string,
    ) {}

    set cpf(cpf: string) {
        this._cpf = cpf;
    }

    get cpf(): string {
        return this._cpf.replace(/\D/g, '');
    }
}

const pessoa = new Pessoa('Vinicius', 'Dilly', 28, '123.456.789-00');

pessoa.cpf = '123.456.789-19';
console.log(pessoa.cpf);

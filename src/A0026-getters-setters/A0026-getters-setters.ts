
export class Pessoa {
    constructor(
        private nome: string,
        private sobrenome: string,
        private idade: number,
        private cpf: string,
    ) {}

    getNome(): string {
        return this.nome;
    }

    getSobrenome(): string {
        return this.sobrenome;
    }

    getCpf(): string {
        return this.cpf.replace(/\D/g, '');
    }
}

const pessoa = new Pessoa('Vinicius', 'Dilly', 28, '123.456.789-00');

console.log(pessoa.getNome());
console.log(pessoa.getSobrenome());
console.log(pessoa.getCpf());

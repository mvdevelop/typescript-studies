
export class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected cpf: string,
    ) {}

    getIdade(): number {
        return this.idade;
    }

    getCpf(): string {
        return this.cpf;
    }

    getNomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }
}

// Aluno herda de Pessoa
export class Aluno extends Pessoa {
    constructor(
        nome: string,
        sobrenome: string,
        idade: number,
        cpf: string,
        public sala: string,
    ) {
        super(nome, sobrenome, idade, cpf);
        this.sala = sala;
    }

    getNomeCompleto(): string {
        console.log('Fazendo algo antes');
        const result = super.getNomeCompleto();
        return result + ' Hello!';
    }
}
// Cliente herda de Pessoa
export class Cliente extends Pessoa {
    getNomeCompleto(): string {
        return `Isso vem de Cliente: ${this.nome} ${this.sobrenome}`;
    }
}

const pessoa01 = new Pessoa('Vinicius', 'Dilly', 28, '123.456.789-00');
const aluno01 = new Aluno('Vinicius', 'Dilly', 28, '123.456.789-00', 'Sala 01');
const cliente01 = new Cliente('Olga', 'Dilly', 18, '987.654.321-00');

console.log(pessoa01.getNomeCompleto());
console.log(aluno01.getNomeCompleto());
console.log(cliente01.getNomeCompleto());
console.log(aluno01);


// A0027 - static

export class Pessoa {
    static idadePadrao = 0;
    static cpfPadrao = '000.000.000-00';

    constructor(
        public nome: string,
        public sobrenome: string,
        public idade: number,
        public cpf: string,
    ) {}

    metodoNormal(): void {
        console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
    }

    static criaPessoa(nome: string, sobrenome: string): Pessoa {
        return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
    }
}

const pessoa01 = new Pessoa('Vinicius', 'Dilly', 28, '123.456.789-19');
const pessoa02 = Pessoa.criaPessoa('Drak', 'Lians');
console.log(pessoa01);
console.log(pessoa02);

pessoa01.metodoNormal();
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);

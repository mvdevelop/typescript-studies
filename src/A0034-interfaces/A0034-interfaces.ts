
// A0034 - Interfaces

interface TipoNome {
    nome: string;
};

interface TipoSobrenome {
    sobrenome: string;
};

interface TipoNomeCompleto {
    nomeCompleto(): string;
};

// type Numero = number | string;

type TipoPessoa01 = TipoNome & TipoSobrenome & TipoNomeCompleto;

interface TipoPessoa02 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa02 {
    constructor(public nome: string, public sobrenome: string) {}

    nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }
}

const pessoa = new Pessoa('Vinicius', 'Dilly');
console.log(pessoa.nomeCompleto());

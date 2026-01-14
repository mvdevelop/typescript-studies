
// A0033 - Implementando tipos

export abstract class TipoPessoa {
    protected abstract nome: string;
    protected abstract sobrenome: string;

    protected abstract nomeCompleto(): string;
}

class Pessoa extends TipoPessoa {
    constructor(protected nome: string, protected sobrenome: string) {}

    protected nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }
}

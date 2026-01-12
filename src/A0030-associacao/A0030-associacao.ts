
// src/A0030-associacao/A0030-associacao.ts

export class Escritor {
    private _ferramenta: Ferramenta | null = null;

    constructor(private _nome: string) {}
}

export abstract class Ferramenta {
    constructor(private _nome: string) {}
    abstract escrever(): void;

    get nome(): string {
        return this._nome;
    }
}


// src/A0030-associacao/A0030-associacao.ts

export class Escritor {
    private _ferramenta: Ferramenta | null = null;

    constructor(private _nome: string) {}

    get nome(): string {
        return this._nome;
    }

    set ferramenta(ferramenta: Ferramenta | null) {
        this._ferramenta = ferramenta;
    }

    get ferramenta(): Ferramenta | null {
        return this._ferramenta;
    }

    escrever(): void {
        if (this.ferramenta === null) {
            console.log(`${this._nome} não tem uma ferramenta para escrever.`);
            return;
        }

        this.ferramenta.escrever();
    }
}

export abstract class Ferramenta {
    constructor(private _nome: string) {}
    abstract escrever(): void;

    get nome(): string {
        return this._nome;
    }
}

export class Caneta extends Ferramenta {
    escrever(): void {
        console.log(`Escrevendo com a caneta ${this.nome}`);
    }
}

export class MaquinaDeEscrever extends Ferramenta {
    escrever(): void {
        console.log(`Digitando com a máquina de escrever ${this.nome}`);
    }
}

const escritor = new Escritor('Vinicius');
const caneta = new Caneta('Bic Cristal');
const maquinaDeEscrever = new MaquinaDeEscrever('IBM Model M');

// console.log(escritor.nome);
// console.log(caneta.nome);
// console.log(maquinaDeEscrever.nome);

escritor.ferramenta = caneta;
escritor.escrever();

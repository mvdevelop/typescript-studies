
// A0047-generics-05.ts

export class Pessoa<T, U> {
    constructor(public nome: T, public idade: U) {}
}

export class Pilha<T> {
    private contador = 0;
    private elementos: { [k: number]: T } = {};

    push(elemento: T): void {
        this.elementos[this.contador] = elemento;
        this.contador++;
    }

    pop(): T | void {
        if (this.estaVazia()) return undefined;

        this.contador--;
        const elemento = this.elementos[this.contador];
        delete this.elementos[this.contador];
        return elemento;
    }

    estaVazia(): boolean {
        return this.contador === 0;
    }

    tamanho(): number {
        return this.contador;
    }

    mostrarPilha(): void {
        for (const chave in this.elementos)
    }
}

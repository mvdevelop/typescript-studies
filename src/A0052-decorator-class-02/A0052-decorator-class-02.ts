
// A0051-decorator-class

function inverteNomeECor(param01: string, param02: string) {
    return function inverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
    console.log('Decorador inverteNomeECor aplicado à classe:', target.name);

    return class extends target {
        cor: string;
        nome: string;

        constructor(...args: any[]) {
            super(...args);
            this.nome = this.inverte(args[0]);
            this.cor = this.inverte(args[1]);
        }

        inverte(valor: string): string {
            return valor.split('').reverse().join('');
        }
    };
}

@inverteNomeECor('valor01', 'valor02')
export class Animal {
    constructor(public nome: string, public cor: string) {
        console.log('Animal criado:', this.nome, this.cor);
    }
}

const animal = new Animal('Drak', 'roxo');
console.log(animal);

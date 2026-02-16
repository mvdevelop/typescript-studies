
// A0051-decorator-class

interface Constructor<T = {}> {
    new (...args: any[]): T;
}

function inverteNomeECor(param01: string, param02: string) {
    // Closure para armazenar os parâmetros do decorador
    return function <T extends Constructor<{ nome: string; cor: string }>>(
        target: T
    ): T {
        console.log(
            'Decorador inverteNomeECor aplicado à classe:',
            target.name
        );

        return class extends target {
            constructor(...args: any[]) {
                super(...args);

                this.nome = this.inverte(this.nome);
                this.cor = this.inverte(this.cor);
            }

            private inverte(valor: string): string {
                return (
                    valor.split('').reverse().join('') +
                    ` (${param01}, ${param02})`
                );
            }
        } as T; // 👈 necessário para manter compatibilidade do tipo
    };
}

function outroDecorador(param01: string, param02: string) {
    return function <T extends Constructor>(target: T): T {
        console.log(
            'Outro decorador aplicado à classe:',
            target.name
        );
        return target;
    };
}

@outroDecorador('outroValor01', 'outroValor02')
@inverteNomeECor('valor01', 'valor02')
export class Animal {
    constructor(public nome: string, public cor: string) {
        console.log('Animal criado:', this.nome, this.cor);
    }
}

const animal = new Animal('Drak', 'roxo');
console.log(animal);

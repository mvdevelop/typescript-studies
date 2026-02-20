
// A0056-decorator-param.ts

function decorador(classPrototype: any, nomeMetodo: string | symbol, index: number): any {
    console.log('classPrototype', classPrototype);
    console.log('nomeMetodo', nomeMetodo);
    console.log('indiceParametro', index);
    return 'decorador';
}

export class UmaPessoa {
    nome: string;
    sobrenome: string;
    idade: number;

    constructor(
        @decorador nome: string,
        @decorador sobrenome: string,
        @decorador idade: number
    ) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    metodo(@decorador msg: string): string {
        return `${msg} ${this.nome} ${this.sobrenome}`;
    }

    get nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }

    set nomeCompleto(valor: string) {
        const palavras = valor.split(/\s+/g);
        const primeiroNome = palavras.shift();
        if (!primeiroNome) return;
        this.nome = primeiroNome;
        this.sobrenome = palavras.join(' ');
    }
}

const pessoa = new UmaPessoa('Vinicius', 'Marinho', 31);
const metodo = pessoa.metodo('Olá, Mundo!');
console.log(metodo);


// A0055-decorator-method

function decorador(
    classPrototype: any,
    nomeMetodo: string,
    descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
    console.log('classPrototype', classPrototype);
    console.log('nomeMetodo', nomeMetodo);
    console.log('descriptor', descriptor);
}

export class UmaPessoa {
    nome: string;
    sobrenome: string;
    idade: number;

    constructor(nome: string, sobrenome: string, idade: number) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    @decorador
    metodo(msg: string): string {
        return `${this.nome} ${this.sobrenome} tem ${this.idade} anos e diz: ${msg}`;
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

const pessoa = new UmaPessoa('Vinicius', 'Dilly', 28);
//pessoa.metodo = () => 'Outro método';

const metodo = pessoa.metodo('Olá, mundo!');
console.log(metodo);

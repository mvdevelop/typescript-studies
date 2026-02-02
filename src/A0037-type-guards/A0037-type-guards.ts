
// A0037-type-guards.ts

// export function add(a: unknown, b: unknown): number | string {
//     if (typeof a === 'number' && typeof b === 'number') {
//         return a + b;
//     }
//     return `${a}${b}`;
// }

export function add(a: unknown, b: unknown): number | string {
    return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(5, 10));
console.log(add('Hello, ', 'World!'));

type Pessoa = { tipo: 'pessoa'; nome: string };
type Animal = { tipo: 'animal'; cor: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
    tipo: 'pessoa' = 'pessoa';
    constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal): void {
    //if ('nome' in obj)console.log(obj.nome);
    //if (obj instanceof Aluno) console.log(obj.nome);
    switch (obj.tipo) {
        case 'pessoa':
            console.log(obj.nome);
            break;
        case 'animal':
            console.log('Isso é um animal', obj.cor);
            break;
    }
}

mostraNome(new Aluno('Vinicius'));
mostraNome({ tipo: 'animal', cor: 'Vermelho' });

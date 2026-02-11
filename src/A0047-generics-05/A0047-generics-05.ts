
// A0047-generics-05.ts

export class Pessoa<T, U> {
    constructor(public nome: T, public idade: U) {}
}

const pessoa01 = new Pessoa('Vinicius', 26);
const pessoa02 = new Pessoa(['Maria'], 48);
const pessoa03 = new Pessoa(['Marcos'], { idade : 32 });
const pessoa04 = new Pessoa(['Marcos'], { idade : 32 });

console.log(pessoa01.nome);
console.log(pessoa01.idade);

console.log(pessoa02.nome);
console.log(pessoa02.idade);

console.log(pessoa03);


// A0047-generics-05.ts

export class Pessoa<T, U> {
    constructor(public nome: T, public idade: U) {}
}

const pessoa01 = new Pessoa<string, number>('Vinicius', 26);
const pessoa02 = new Pessoa<string, number>('Maria', 30);

console.log(pessoa01.nome);
console.log(pessoa01.idade);

console.log(pessoa02.nome);
console.log(pessoa02.idade);

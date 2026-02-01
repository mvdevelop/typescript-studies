
/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Vinicius'; // Qualquer tipo de strings: '' "" ``
let idade: number = 30; // 10, 1.57, -5.55, 0xf00d,
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
//let big: bigint = 10n; // bigint

// Arrays
let arrayDeNumeros01: Array<number> = [1, 2, 3];
let arrayDeNumeros02: number[] = [1, 2, 3];
let arrayDeStrings01: Array<string> = ['a', 'b', 'c'];
let arrayDeStrings02: string[] = ['a', 'b', 'c'];

// Objetos
let pessoa1: {nome: string, idade: number, adulto?: boolean} = {
    nome: 'Vinicius',
    idade: 28,
};

// Funções
function soma(x: number, y: number): number {
    return x + y;
}
const soma02: (x: number, y: number) => number = (x, y) => x + y;

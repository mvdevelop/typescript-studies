
// Declaration Merging em Interfaces
interface Pessoa {
    nome: string;
};

interface Pessoa {
    readonly sobrenome: string;
    readonly enderecos: readonly string[];
    readonly idade?: number;
}

const pessoa: Pessoa = {
    nome: "Vinicius",
    sobrenome: "Marinho",
    enderecos: ["Rua A, 123", "Avenida B, 456"],
    idade: 28,
};

pessoa.idade = 29;
console.log(pessoa);

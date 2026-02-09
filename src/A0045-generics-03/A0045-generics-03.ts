
// A0045-generics-03.ts

interface PessoaProtocolo<T = string, U = number> {
    nome: T;
    sobrenome: T;
    idade: U;
}

const aluno01: PessoaProtocolo<string, number> = {
    nome: "Vinicius",
    sobrenome: "Marinho",
    idade: 28,
};

const aluno02: PessoaProtocolo<string, number> = {
    nome: "Drak",
    sobrenome: "Lians",
    idade: 28,
};

const aluno03: PessoaProtocolo = {
    nome: "Drak",
    sobrenome: "Lians",
    idade: 28,
};

console.log(aluno01, aluno02, aluno03);


// A0045-generics-03.ts

interface PessoaProtocolo<T = string, U = number> {
    nome: T;
    sobrenome: T;
    idade: U;
}

type PessoaProtocolo02<T = string, U = number> = {
    nome: T;
    sobrenome: T;
    idade: U;
}

const aluno01: PessoaProtocolo02<string, number> = {
    nome: "Vinicius",
    sobrenome: "Marinho",
    idade: 28,
};

const aluno02: PessoaProtocolo<string, number> = {
    nome: "Drak",
    sobrenome: "Lians",
    idade: 28,
};

const aluno03: PessoaProtocolo02 = {
    nome: "Drak",
    sobrenome: "Lians",
    idade: 28,
};

console.log(aluno01, aluno02, aluno03);

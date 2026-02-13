
// A0050-generics-08.ts

// Record
const objeto01: Record<string, string | number> = {
    nome: 'Vinicius',
    sobrenome: 'Marinho',
    idade: 28,
};

console.log(objeto01);

type PessoaProtocol = {
    nome?: string;
    sobrenome?: string;
    idade?: number;
};

const objeto02: PessoaProtocol = {
    nome: 'Vinicius',
    sobrenome: 'Marinho',
    idade: 28,
};

console.log(objeto02);

// Module mode
export default 1;

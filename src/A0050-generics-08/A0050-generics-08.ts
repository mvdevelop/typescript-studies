
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

// Required
type PessoaRequired = Required<PessoaProtocol>;

// Partial
type PessoaPartial = Partial<PessoaRequired>;

// Readonly
type PessoaReadonly = Readonly<PessoaRequired>;

// Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto02: PessoaProtocol = {
    nome: 'Vinicius',
    sobrenome: 'Marinho',
    idade: 28,
};

console.log(objeto02);

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';

// Module mode
export default 1;

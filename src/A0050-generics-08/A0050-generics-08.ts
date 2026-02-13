
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
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

//
type AccountMongo = {
    _id: string;
    nome: string;
    idade: number;
};

type AccountApi = {
    id: string;
    nome: string;
    idade: number;
};

const accountMongo: AccountMongo = {
    _id: 'qpoeuhsdafp98qy40husaihrh',
    nome: 'Vinicius',
    idade: 28,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
    const { _id, ...accountData } = accountMongo;
    return { ...accountData, id: _id }
};

// Module mode
export default 1;

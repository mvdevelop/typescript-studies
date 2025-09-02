
type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type Intersecao = AB & AC & AD;

const pessoa_intersection: Pessoa = {
    nome: 'Vinicius',
    sobrenome: 'Dilly',
    idade: 28,
};

console.log(pessoa_intersection);

// Module mode
export { pessoa_intersection };

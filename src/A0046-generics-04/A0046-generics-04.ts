
// A0046-generics-04.ts

type ObterChaveFn = <O, K extends keyof O>(obj: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (obj, chave) => obj[chave];

const animal = {
    nome: 'Cachorro',
    idade: 5,
    raca: 'Labrador',
    vacinas: ['V8', 'V10', 'Raiva'],
};

const nomeAnimal = obterChave(animal, 'nome');
const vacinas = obterChave(animal, 'vacinas');

console.log(nomeAnimal);
console.log(vacinas);

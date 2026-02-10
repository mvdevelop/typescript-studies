
// A0046-generics-04.ts

type ObterChaveFn = <O, K extends keyof O>(obj: O, chave: K) => O[K];

};


namespace MeuNamespace {
    const nome = "Marcos";

    export class PessoaDoNamespace {
        constructor(public nome: string) { }
    }

    const pessoa = new PessoaDoNamespace('Marcos');
    console.log(pessoa);
}

const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Vinicius');
console.log(pessoaDoNamespace);

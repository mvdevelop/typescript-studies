
namespace MeuNamespace {
    const nomeDoNamespace = "Marcos";

    export class PessoaDoNamespace {
        constructor(public nome: string) { }
    }

    const pessoaDoNamespace = new PessoaDoNamespace('Marcos');
    console.log(pessoaDoNamespace);
}

const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Vinicius');
console.log(pessoaDoNamespace);

export default MeuNamespace;

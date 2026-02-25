
namespace MeuNamespace {
    const nome = "Vinicius";

    export class PessoaDoNamespace {
        constructor(public nome: string) { }
    }

    const pessoa = new PessoaDoNamespace('Vinicius');
    console.log(pessoa);
}

const pessoa = new PessoaDoNamespace('Marcos');
console.log(pessoa.nome);

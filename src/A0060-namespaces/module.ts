
namespace MeuNamespace {
    export const nomeDoNamespace = "Marcos";

    export class PessoaDoNamespace {
        constructor(public nome: string) { }
    }

    const pessoaDoNamespace = new PessoaDoNamespace('Marcos');
    console.log(pessoaDoNamespace);

    export namespace OutroNamespace {
        export const nomeDoOutroNamespace = "Camila";
    }
}

const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Vinicius');
console.log(pessoaDoNamespace);
console.log(MeuNamespace.nomeDoNamespace);
console.log(MeuNamespace.OutroNamespace.nomeDoOutroNamespace);

const constDoNamespace = 'Valor da const do namespace';
console.log(constDoNamespace);

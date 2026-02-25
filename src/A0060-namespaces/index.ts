
namespace MeuNamespace {
    //console.log("Olá, eu sou um namespace!");
    const nome = "Vinicius";

    class PessoaDoNamespace {
        constructor(public nome: string) { }
    }

    const pessoa = new PessoaDoNamespace(nome);
    console.log(pessoa.nome);
}

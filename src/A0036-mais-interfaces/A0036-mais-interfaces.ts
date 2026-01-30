
interface Pessoa {
    nome: string;
};

interface Pessoa {
    readonly sobrenome: string;
}

interface Pessoa {
    readonly enderecos: string[];
}

const pessoa: Pessoa = {
    nome: "Vinicius",
    sobrenome: "Marinho",
};

//pessoa.sobrenome = "";
console.log(pessoa);

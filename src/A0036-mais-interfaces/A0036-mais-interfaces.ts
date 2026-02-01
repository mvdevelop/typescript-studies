
interface Pessoa {
    nome: string;
};

interface Pessoa {
    readonly sobrenome: string;
}

interface Pessoa {
    readonly enderecos: readonly string[];
}

interface Pessoa {
    readonly idade?: number;
}

const pessoa: Pessoa = {
    nome: "Vinicius",
    sobrenome: "Marinho",
    enderecos: ["Rua A, 123", "Avenida B, 456"],
    idade: 28,
};

//pessoa.sobrenome = "";
//pessoa.enderecos.push("Travessa C, 789");
console.log(pessoa);

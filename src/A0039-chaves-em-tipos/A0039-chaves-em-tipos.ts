
// A0039-chaves-em-tipos.ts

type Veiculo = {
    marca: string;
    ano: number;
};

type Car = {
    brand: Veiculo["marca"];
    year: Veiculo["ano"];
    name: string;
};

const carro: Car = {
    brand: "Toyota",
    year: 2020,
    name: "Corolla"
};

console.log(carro);

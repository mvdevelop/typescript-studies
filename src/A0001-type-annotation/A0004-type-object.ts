
const objetoA: {
    readonly chaveA: string;
    chaveB: string;
} = {
    chaveA: 'Valor A',
    chaveB: 'Valor B',
};

objetoA.chaveB = 'Outro Valor';

console.log(objetoA);

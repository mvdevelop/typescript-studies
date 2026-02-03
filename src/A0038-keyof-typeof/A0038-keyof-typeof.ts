
// A0038-keyof-typeof.ts

type CoresObj = {
    vermelho: string;
    azul: string;
    verde: string;

};

const coresObj: CoresObj = {
    vermelho: 'red',
    azul: 'blue',
    verde: 'green',
};

function traduzirCor(cor: string, cores: CoresObj) {
    return cores[cor];
}

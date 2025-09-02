
let x = 10;
x = 0b1010;
//x = 'Vinicius';
const y = 10;
const a = 100;

const person = {
    firstName: 'Vinicius' as const,
    lastName: 'Dilly',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
    return cor;
}
console.log(escolhaCor('Vermelho'));

// Module mode
export default 1;

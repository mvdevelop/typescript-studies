
// Tuple
const dadosCliente01: readonly [number, string] = [1, 'Vinicius'];
const dadosCliente02: [number, string, string] = [1, 'Drak', 'Lians'];
const dadosCliente03: [number, string, string?] = [1, 'Drak'];
const dadosCliente04: [number, string, ...string[]] = [1, 'Drak', 'Lians'];

// dadosCliente01[0] = 100;
// dadosCliente01[1] = 'Drak';

console.log(dadosCliente01);
console.log(dadosCliente02);
console.log(dadosCliente03);
console.log(dadosCliente04);

// readonly array
const array01: readonly string[] = ['Vinicius', 'Dilly'];
const array02: ReadonlyArray<string> = ['Vinicius', 'Dilly'];

console.log(array01);
console.log(array02);

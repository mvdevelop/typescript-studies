
function semRetorno(...args: string[]): void {
    console.log(args.join(' '));
}

const pessoa = {
    nome: 'Vinicius',
    sobrenome: 'Dilly',

    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobrenome);
    },
};

semRetorno('Vinicius', 'Dilly');
pessoa.exibirNome();

export { pessoa };

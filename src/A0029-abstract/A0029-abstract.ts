
// A0029-abstract

export class Personagem {
    constructor(
        protected nome: string,
        protected ataque: number,
        protected vida: number,
    ) { }

    atacar(personagem: Personagem): void {
        this.bordao();
        personagem.perderVida(this.ataque);
    }

    perderVida(forcaAtaque: number): void {
        this.vida -= forcaAtaque;
        console.log(`${this.nome} agora tem ${this.vida - forcaAtaque} de vida.`);
    }

    bordao(): void {
        console.log("Força e honra!");
    }
}

export class Guerreira extends Personagem {
    bordao(): void {
        console.log("Força e honra!");
    }
};

export class Monstro extends Personagem {};

const guerreira = new Guerreira("Xena", 100, 1000);
const monstro = new Monstro("Hidra", 80, 2000);

guerreira.atacar(monstro);
monstro.atacar(guerreira);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
guerreira.atacar(monstro);
monstro.atacar(guerreira);

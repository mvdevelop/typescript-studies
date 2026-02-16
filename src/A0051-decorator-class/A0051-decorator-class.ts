
// A0051-decorator-class

export class Animal {
    constructor(public cor: string) {

    }
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
    return class extends target {
        cor: string;

        constructor(...args: any[]) {
            super(...args);
            this.cor = args[0].split('').reverse();
        }
    };
}

const AnimalDecorated = decorator(Animal);
const animal = new AnimalDecorated('roxo');

console.log(animal);

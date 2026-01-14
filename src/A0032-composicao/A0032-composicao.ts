
// A0032-composicao.ts

export class Carro {
    public readonly motor = new Motor();
}

export class Motor {
    ligar(): void {
        console.log('Motor está ligado...');
    }

    acelerar(): void {
        console.log('Motor está acelerando...');
    }

    frear(): void {
        console.log('Motor está freando...');
    }

    desligar(): void {
        console.log('Motor está desligado...');
    }
}

const carro = new Carro();
carro.motor.ligar();

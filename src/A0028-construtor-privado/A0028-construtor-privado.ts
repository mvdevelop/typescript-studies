
// A0028-construtor-privado

export class Database {
    constructor(
        private host: string,
        private user: string,
        private password: string,
    ) { }

    connect(): void {
        console.log(`Connecting to: ${this.host}, ${this.user}, ${this.password}`);
    }
}

const dataBase = new Database("localhost", "root", "123456");
dataBase.connect();

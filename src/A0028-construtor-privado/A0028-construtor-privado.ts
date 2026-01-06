
// A0028-construtor-privado

// Singleton (GOF): Padrão de projeto que restringe a instanciação de uma classe a um único objeto.
export class Database {
    private static database: Database;

    private constructor(
        private host: string,
        private user: string,
        private password: string,
    ) { }

    connect(): void {
        console.log(`Connecting to: ${this.host}, ${this.user}, ${this.password}`);
    }

    static getDatabase(host: string, user: string, password: string): Database {}
}

const dataBase01 = Database.getDatabase("localhost", "root", "123456");
dataBase01.connect();

const dataBase02 = Database.getDatabase("localhost", "root", "123456");
dataBase02.connect();

console.log(dataBase01 === dataBase02);

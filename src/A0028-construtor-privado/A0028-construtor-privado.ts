
// A0028-construtor-privado

// Singleton (GOF): Padrão de projeto que restringe a instanciação de uma classe a um único objeto.
// Factory Method (GOF): Padrão de projeto que define uma interface para criar um objeto, mas permite que as subclasses decidam qual classe instanciar.
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

    static getDatabase(host: string, user: string, password: string): Database {
        if (Database.database) {
            console.log("Retornando instância já criada.");
            return Database.database;
        }
        console.log("Criando nova instância.");

        Database.database = new Database(host, user, password);
        return Database.database;
    }
}

const dataBase01 = Database.getDatabase("localhost", "root", "123456");
dataBase01.connect();

const dataBase02 = Database.getDatabase("localhost", "root", "123456");
dataBase02.connect();

const dataBase03 = Database.getDatabase("localhost", "root", "123456");
dataBase03.connect();

const dataBase04 = Database.getDatabase("localhost", "root", "123456");
dataBase04.connect();

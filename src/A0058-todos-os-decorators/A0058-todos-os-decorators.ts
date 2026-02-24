
// A0058-todos-os-decorators

// Tipo do construtor de classe
type Constructor = new (...args: any[]) => any;

// Classes
function decoratorDeClasse(constructor: Constructor): any {
    console.log('Classe');
    console.log(constructor);
    console.log('-------------------');
}

// Método de instância (normal)
function decoradorDeMetodo(prototipoDaClasse: any, nomeDoMetodo: string, descritorDePropriedade: PropertyDescriptor): any {
    console.log('Método de instância (normal)');
    console.log(prototipoDaClasse);
    console.log(nomeDoMetodo);
    console.log(descritorDePropriedade);
    console.log('-------------------');
}

// Método de instância (estático)
function decoradorDeMetodoEstatico(construtorDaClasse: any, nomeDoMetodo: string, descritor: PropertyDescriptor): any {
    console.log('Método de instância (estático)');
    console.log(construtorDaClasse);
    console.log(nomeDoMetodo);
    console.log(descritor);
    console.log('-------------------');
}

// Propriedade de instância (normal)
function decoradorDePropriedade(prototipoDaClasse: any, nomeDaPropriedade: string): any {
    console.log('Propriedade de instância (normal)');
    console.log(prototipoDaClasse);
    console.log(nomeDaPropriedade);
    console.log('-------------------');
}

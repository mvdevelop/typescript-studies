
// A0048-generics-06.ts

export function unirObjetos<T, U>(obj01: T, obj02: U): T & U {
    //return { ...obj01, ...obj02 };
    return Object.assign({}, obj01, obj02);
}

const obj01 = { chave01: 'valor01' };
const obj02 = { chave02: 'valor02' };
const uniao = unirObjetos(obj01, obj02);
console.log(uniao);

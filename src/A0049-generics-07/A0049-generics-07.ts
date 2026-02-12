
// A0049-generics-07.ts

export function isNumber(value: unknown): boolean {
    return typeof value === 'number';
}

//console.log(isNumber('123'));
//console.log(isNumber(123));

export function soma<T>(...args: T[]): number | null {
    const retorno = args.reduce();
}

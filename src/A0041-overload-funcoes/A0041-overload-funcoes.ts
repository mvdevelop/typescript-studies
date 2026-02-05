
// A0041-overload-funcoes.ts

type Adder = {
    (x: number): number;
    (x: number, y: number): number;
    (x: string): string;
    (x: boolean): boolean;
    (...args: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]): any => {
    if (args.length > 0) return args.reduce((s, val) => s + val, 0) + x + (y || 0);
    return y !== undefined ? x + y : x;
};

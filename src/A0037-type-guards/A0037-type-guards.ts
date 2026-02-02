
// A0037-type-guards.ts

export function add(a: unknown, b: unknown) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return `${a}${b}`;
}

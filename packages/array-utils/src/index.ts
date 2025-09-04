// src/index.ts

/** Split array into chunks */
export function chunk<T>(arr: T[], size: number): T[][] {
    if (size <= 0) throw new Error("Size must be greater than 0");
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

/** Remove duplicates from array */
export function unique<T>(arr: T[]): T[] {
    return [...new Set(arr)];
}

/** Flatten nested arrays */
export function flatten<T>(arr: (T | T[])[]): T[] {
    return arr.reduce<T[]>((acc, val) => acc.concat(val), []);
}

/** Shuffle array elements */
export function shuffle<T>(arr: T[]): T[] {
    const result = [...arr];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

/** Pick random element */
export function sample<T>(arr: T[]): T | undefined {
    if (arr.length === 0) return undefined;
    return arr[Math.floor(Math.random() * arr.length)];
}

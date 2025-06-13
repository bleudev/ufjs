/**
 * Get average value of `values`
 * @param (T[]) values: Array to get average value
 * @returns (number) Average value of `values`
 */
export function avg<T>(...values: T[]): number {
    var sum = values.reduce((acc, cur) => acc + Number(cur), 0);
    return sum / values.length;
}
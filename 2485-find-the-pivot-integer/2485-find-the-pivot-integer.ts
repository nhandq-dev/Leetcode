function pivotInteger(n: number): number {
    const x = Math.sqrt((n * (n + 1)) / 2);
    return x % 1 === 0 ? x : -1;
};
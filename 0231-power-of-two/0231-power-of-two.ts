function isPowerOfTwo(n: number): boolean {
    return 2 ** ((n).toString(2).length-1) === n
};
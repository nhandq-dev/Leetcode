/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    const n = s.length
    for (let i: number = 0; i < Math.floor(n / 2); i++) {
        [s[i], s[n-1-i]] = [s[n-1-i], s[i]]
    }
};
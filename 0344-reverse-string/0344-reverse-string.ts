/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    for (let i: number = 0; i<=Math.floor(s.length/2); i++) {
        s.splice(s.length - i, 0, s[i])
        s[i] = s[s.length - 2 - i];
        s.splice(s.length - 2 - i, 1);
    }
};
function gcdOfStrings(str1: string, str2: string): string {
    return str1 + str2 === str2 + str1 ? str1.slice(0, gcd(str1.length, str2.length)) : '';
};

function gcd(x: number, y: number): number {
    return y===0 ? x : gcd(y, x % y);
}

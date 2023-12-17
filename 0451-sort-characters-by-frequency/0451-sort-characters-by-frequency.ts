function frequencySort(s: string): string {
    const letterMap: Map<string, number> = new Map();

    for (let i = 0; i < s.length; i++) {
        if (!letterMap.has(s[i])) {
            letterMap.set(s[i], 0)
        }
        letterMap.set(s[i], letterMap.get(s[i]) + 1);
    }

    letterMap[Symbol.iterator] = function* () {
        yield* [...this.entries()].sort((a, b) => b[1] - a[1]);
    }

    return [...letterMap].reduce((pre, curr) => pre += curr[0].repeat(curr[1]), '')
};

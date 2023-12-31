function maxLengthBetweenEqualCharacters(s: string): number {
    const wordIdx: Map<string, number> = new Map()
    let res = -1

    for (let i = 0; i < s.length; i++) {
        if (wordIdx.has(s[i])) {
            res = Math.max(res, i - wordIdx.get(s[i]) - 1)
        } else {
            wordIdx.set(s[i], i)
        }
    }

    return res
};
function wonderfulSubstrings(word: string): number {
    const letterMap: Map<string, number> = new Map([
        ['a', 1],
        ['b', 2],
        ['c', 4],
        ['d', 8],
        ['e', 16],
        ['f', 32],
        ['g', 64],
        ['h', 128],
        ['i', 256],
        ['j', 512],
    ])
    let res = 0
    const n = word.length
    const maskFreq: Map<number, number> = new Map([[0, 1]])
    let mask = 0

    for (let i = 0; i < n; i++) {
        mask ^= letterMap.get(word[i])
        if (maskFreq.has(mask)) {
            res += maskFreq.get(mask)
            maskFreq.set(mask, maskFreq.get(mask) + 1)
        } else {
            maskFreq.set(mask, 1)
        }

        for (let j = 0; j < 10; j++) {
            const candidateMask = 1 << j
            res += maskFreq.get((mask ^ candidateMask)) || 0
        }
    }

    return res
};

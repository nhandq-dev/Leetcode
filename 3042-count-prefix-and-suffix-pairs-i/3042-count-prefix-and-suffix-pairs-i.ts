function countPrefixSuffixPairs(words: string[]): number {
    let res = 0

    for (let i = 0; i < words.length - 1; i++) {
        const w = words[i]
        for (let j = i + 1; j < words.length; j++) {
            if (w === words[j].slice(0, w.length) && w === words[j].slice(-1 * w.length)) res++
        }
    }

    return res
};
function vowelStrings(words: string[], queries: number[][]): number[] {
    const VOWEL_LETTERS = ['a', 'e', 'o', 'u', 'i']
    const prefixSum: number[] = [0]
    const validString = _.memoize((str: string) => {
        return VOWEL_LETTERS.includes(str.charAt(0)) && VOWEL_LETTERS.includes(str.charAt(str.length - 1))
    })
    for (const w of words) {
        prefixSum.push(prefixSum[prefixSum.length - 1] + validString(w))
    }

    return queries.map(([s, e]) => prefixSum[e + 1] - prefixSum[s])
};

/**
function vowelStrings(words: string[], queries: number[][]): number[] {
    const VOWEL_LETTERS = ['a', 'e', 'o', 'u', 'i']
    const validString = _.memoize((str: string) => {
        return VOWEL_LETTERS.includes(str.charAt(0)) && VOWEL_LETTERS.includes(str.charAt(str.length - 1))
    })

    return queries.map(([start, end]) => {
        let res = 0
        for (let i = start; i <= end; i++) {
            if (validString(words[i])) res++
        }
        return res
    })
};
 */
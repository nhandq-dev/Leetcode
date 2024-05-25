function wordBreak(s: string, wordDict: string[]): string[] {
    const setOfWord: Set<string> = new Set()
    let minSentenceLength = wordDict[0].length, maxSentenceLength = 0

    for (const word of wordDict) {
        setOfWord.add(word)
        minSentenceLength = Math.min(minSentenceLength, word.length)
        maxSentenceLength = Math.max(maxSentenceLength, word.length)
    }

    const dp = _.memoize((idx: number, prefixWord: string): string[] | false => {
        if (s[idx] === undefined) return prefixWord.length === 0 ? [] : false

        const currentChar = s[idx]
        let candidate: string[] = []

        if (setOfWord.has(`${prefixWord}${currentChar}`)) {
            const takeThisWord = dp(idx + 1, '')

            if (takeThisWord !== false) {
                candidate = takeThisWord.length === 0 ? [`${prefixWord}${currentChar}`] : candidate.concat(takeThisWord.map(word => `${prefixWord}${currentChar} ${word}`))
            }
        }

        const notTakeThisWord = dp(idx + 1, `${prefixWord}${currentChar}`)
        if (notTakeThisWord !== false) {
            candidate = candidate.concat(notTakeThisWord)
        }

        return candidate.length === 0 ? false : candidate
    }, (arg1, arg2) => `${arg1}-${arg2}`)
    const res = dp(0, '')

    return res === false ? [] : res
};
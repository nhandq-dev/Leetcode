function maxScoreWords(words: string[], letters: string[], score: number[]): number {
    const letterFreq: Map<string, number> = new Map()
    for (const letter of letters) {
        letterFreq.set(letter, (letterFreq.get(letter) || 0) + 1)
    }

    const getLetterScore = _.memoize((letter: string): number => score[letter.charCodeAt(0) - 97])
    const wordScores = (word: string): number => {
        let score = 0
        const wordLetterFreq: Map<string, number> = new Map()

        for (let i = 0; i < word.length; i++) {
            wordLetterFreq.set(word[i], (wordLetterFreq.get(word[i]) || 0) + 1)

            if (!letterFreq.has(word[i]) || wordLetterFreq.get(word[i]) > letterFreq.get(word[i])) {
                return 0
            }
        }

        wordLetterFreq.forEach((freq: number, letter: string) => {
            score += freq * getLetterScore(letter)
        })

        return score
    }

    const dp = (idx: number): number => {
        if (words[idx] === undefined) return 0
        const currentWord = words[idx]
        let candidate = 0
        const wordScore = wordScores(currentWord)

        if (wordScore !== 0) {
            for (let i = 0; i < currentWord.length; i++) {
                letterFreq.set(currentWord[i], letterFreq.get(currentWord[i]) - 1)
            }

            candidate = wordScore + dp(idx + 1)

            for (let i = 0; i < currentWord.length; i++) {
                letterFreq.set(currentWord[i], letterFreq.get(currentWord[i]) + 1)
            }
        }

        return Math.max(
            candidate,
            dp(idx + 1)
        )
    }

    return dp(0)
};
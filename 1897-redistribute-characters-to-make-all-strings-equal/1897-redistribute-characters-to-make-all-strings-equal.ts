function makeEqual(words: string[]): boolean {
    const charCount: Map<string, number> = new Map()

    for (const word of words) {
        for (let i=0; i<word.length; i++) {
            charCount.set(word[i], (charCount.get(word[i]) || 0) + 1)
        }
    }

    return !Array.from(charCount.values()).some((frequence) => frequence < words.length || frequence % words.length !== 0)
};
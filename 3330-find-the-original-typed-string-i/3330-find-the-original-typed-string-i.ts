function possibleStringCount(word: string): number {
    const wordFrequence: number[] = Array.from({ length: 26 }, _ => 0)

    for (let i=0; i<word.length; i++) {
        wordFrequence[word.charCodeAt(i) - 97]++
    }

    return 1 + wordFrequence.filter(f => f > 1).reduce((c, n) => c+n-1, 0)
};
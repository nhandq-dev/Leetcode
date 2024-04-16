function mergeAlternately(word1: string, word2: string): string {
    let res = ''

    while (word1.length && word2.length) {
        res = `${res}${word1[0]}${word2[0]}`
        word1 = word1.slice(1)
        word2 = word2.slice(1)
    }

    return `${res}${word1}${word2}`
};
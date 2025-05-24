function findWordsContaining(words: string[], x: string): number[] {
    return words.reduce((carry: number[], w: string, idx: number) => {
        if (w.includes(x)) {
            carry.push(idx)
        }

        return carry
    }, [] as number[])
};
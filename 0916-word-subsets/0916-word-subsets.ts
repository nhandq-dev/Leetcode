function wordSubsets(words1: string[], words2: string[]): string[] {
    const bMax: number[] = Array.from({ length: 26 }, _ => 0)

    for (const w of words2) {
        const count: number[] = Array.from({ length: 26 }, _ => 0)

        for (let i = 0; i < w.length; i++) {
            count[w.charCodeAt(i) - 97] += 1
            bMax[w.charCodeAt(i) - 97] = Math.max(bMax[w.charCodeAt(i) - 97], count[w.charCodeAt(i) - 97])
        }
    }

    return words1.filter((w: string, idx: number) => {
        const count: number[] = Array.from({ length: 26 }, _ => 0)

        for (let i = 0; i < w.length; i++) {
            count[w.charCodeAt(i) - 97] += 1
        }

        return !bMax.some((freq, idx) => freq > count[idx])
    })
};
function findLeastNumOfUniqueInts(arr: number[], k: number): number {
    const numsFreq: Map<number, {
        value: number,
        freq: number
    }> = new Map()

    for (const item of arr) {
        numsFreq.set(
            item,
            {
                value: item,
                freq: (numsFreq.get(item) || { freq: 0 }).freq + 1
            }
        )
    }
    const sortedByFreq: {
        value: number,
        freq: number
    }[] = Array.from(numsFreq.values())
    sortedByFreq.sort((a, b) => a.freq - b.freq)

    while (k > 0) {
        const firstFreq = sortedByFreq[0].freq

        if (k < firstFreq) {
            return sortedByFreq.length
        }

        k -= firstFreq
        sortedByFreq.shift()
    }

    return sortedByFreq.length
};
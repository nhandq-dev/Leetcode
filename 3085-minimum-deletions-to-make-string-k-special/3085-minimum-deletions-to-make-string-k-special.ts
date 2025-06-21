function minimumDeletions(word: string, k: number): number {
    const freqMap: Map<string, number> = new Map()
    for (let i=0; i<word.length; i++) {
        freqMap.set(word[i], (freqMap.get(word[i]) || 0) + 1)
    }
    const freq: number[] = Array.from(freqMap.values())
    let res = word.length

    for (let i=0; i<freq.length; i++) {
        let candidate = 0

        for (const f of freq) {
            if (freq[i] > f) {
                candidate += f
            } else if (f - freq[i] > k) {
                candidate += f - freq[i] - k
            }
        }

        res = Math.min(res, candidate)
    }
    
    return res
};
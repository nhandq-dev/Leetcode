function minimumPushes(word: string): number {
    const wordMap: Map<string, number> = new Map()
    
    for (let i=0; i<word.length; i++) {
        wordMap.set(word[i], (wordMap.get(word[i]) || 0) + 1)
    }

    if (wordMap.size < 9) {
        return word.length
    }
    
    const frequence: number[] = Array.from(wordMap.values())
    frequence.sort((a,b) => b-a)
    
    let res=0;
    for (let i=0; i<frequence.length; i++) {
        const freq = frequence[i]
        res += freq*(Math.floor(i/8)+1)
    }

    return res
};
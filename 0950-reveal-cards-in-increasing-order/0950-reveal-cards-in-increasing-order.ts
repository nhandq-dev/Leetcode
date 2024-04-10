function deckRevealedIncreasing(deck: number[]): number[] {
    deck.sort((a, b) => a-b)
    const n = deck.length
    let res: number[] = Array.from({ length: n })

    for (let i=0; i<n; i++) {
        let resIdx = i*2
        while (resIdx >= n) {
            resIdx = resIdx%n*2 + 1
        }

        res[resIdx] = deck[i]
    }

    return res
};
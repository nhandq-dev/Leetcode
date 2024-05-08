function findRelativeRanks(score: number[]): string[] {
    const sortedScore: number[] = [...score].sort((a, b) => b-a)
    const scroreIdx: Map<number, number> = sortedScore.reduce((c: Map<number, number>, i: number, idx: number) => {
        c.set(i, idx)
        return c
    }, new Map())

    return score.map((item: number) => {
        const sortedIdx = scroreIdx.get(item)
        switch (sortedIdx) {
            case 0:
                return 'Gold Medal'
            case 1:
                return 'Silver Medal'
            case 2:
                return 'Bronze Medal'
            default:
                return `${sortedIdx+1}`
        }
    })
};
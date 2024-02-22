function findJudge(n: number, trust: number[][]): number {
    if (trust.length === 0) return n === 1 ? n : -1
    const setOfTown: Set<number> = new Set()
    const mapOfTown: Map<number, number> = new Map()
    const total = n*(n+1)/2
    const compare = trust.reduce((c, i) => {
        if (!setOfTown.has(i[0])) {
            c += i[0]
            setOfTown.add(i[0])
        }
        mapOfTown.set(i[1], (mapOfTown.get(i[1]) || 0) + i[0])

        return c
    }, 0)

    if (total === compare) {
        return -1
    }
    const candidate = total - compare

    return mapOfTown.get(candidate) === total - candidate ? candidate : -1
};
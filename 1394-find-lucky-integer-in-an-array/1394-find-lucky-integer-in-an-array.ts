function findLucky(arr: number[]): number {
    const mapFreq: Map<number, number> = new Map()

    for (const n of arr) {
        mapFreq.set(n, (mapFreq.get(n) || 0) + 1)
    }

    let answer = -1
    mapFreq.forEach((value, key) => {
        if (value === key) {
            answer = Math.max(value, answer)
        }
    })

    return answer
};
function frequencySort(nums: number[]): number[] {
    const numFreq: Map<number, number> = new Map()
    for (const num of nums) {
        numFreq.set(num, (numFreq.get(num) || 0) + 1)
    }

    const numF = Array.from(numFreq.entries())
    numF.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1])

    return numF.reduce((curr, item) => curr.concat(Array.from({ length: item[1] }, _ => item[0])), [])
};
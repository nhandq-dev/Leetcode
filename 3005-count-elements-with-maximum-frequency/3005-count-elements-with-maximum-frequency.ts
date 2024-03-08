function maxFrequencyElements(nums: number[]): number {
    const frequenceMap: Map<number, number> = new Map()

    for (const num of nums) {
        frequenceMap.set(num, (frequenceMap.get(num) || 0) + 1)
    }
    const freqArr = Array.from(frequenceMap.values())
    const maxF = Math.max(...freqArr)

    return freqArr.reduce((carr, item) => item === maxF ? carr + item : carr, 0)
};
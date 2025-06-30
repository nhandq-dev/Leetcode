function findLHS(nums: number[]): number {
    const numFreq: Map<number, number> = new Map()

    for (const num of nums) {
        numFreq.set(num, (numFreq.get(num) || 0) + 1)
    }
    const numFreqArr: number[][] = Array.from(numFreq.entries())

    let answer = 0
    for (let i = 0; i < numFreqArr.length; i++) {
        const [num, freq] = numFreqArr[i]

        if (numFreq.has(num - 1))
            answer = Math.max(answer, numFreqArr[i][1] + numFreq.get(num - 1))
        if (numFreq.has(1 + num))
            answer = Math.max(answer, numFreqArr[i][1] + numFreq.get(num + 1))
    }

    return answer
};
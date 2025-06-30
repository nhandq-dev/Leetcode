function findLHS(nums: number[]): number {
    const numFreq: Map<number, number> = new Map()
    let answer = 0

    for (const num of nums) {
        numFreq.set(num, (numFreq.get(num) || 0) + 1)
    }

    numFreq.forEach((freq, num) => {
        if (numFreq.has(num - 1)) {
            answer = Math.max(answer, freq + numFreq.get(num - 1))
            numFreq.delete(num)
        }
        if (numFreq.has(num + 1)) {
            answer = Math.max(answer, freq + numFreq.get(num + 1))
            numFreq.delete(num)
        }
    })

    return answer
};
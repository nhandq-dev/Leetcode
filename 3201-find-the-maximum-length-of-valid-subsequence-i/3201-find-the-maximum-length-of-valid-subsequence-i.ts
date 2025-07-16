function maximumLength(nums: number[]): number {
    const modularNums = nums.map(n => n % 2)
    const candidateStartAtZero = []
    const candidateStartAtOne = []
    let countOfZero = 0

    for (const num of modularNums) {
        if (num === 0) {
            if (candidateStartAtZero.length === 0 || candidateStartAtZero[candidateStartAtZero.length - 1] === 1) {
                candidateStartAtZero.push(num)
            }
            if (candidateStartAtOne[candidateStartAtOne.length - 1] === 1) {
                candidateStartAtOne.push(num)
            }
            countOfZero++
        } else {
            if (candidateStartAtOne.length === 0 || candidateStartAtOne[candidateStartAtOne.length - 1] === 0) {
                candidateStartAtOne.push(num)
            }
            if (candidateStartAtZero[candidateStartAtZero.length - 1] === 0) {
                candidateStartAtZero.push(num)
            }
        }
    }

    return Math.max(countOfZero, nums.length - countOfZero, candidateStartAtZero.length, candidateStartAtOne.length)
};
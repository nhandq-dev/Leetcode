function maximumLength(nums: number[]): number {
    const candidateStartAtZero = []
    const candidateStartAtOne = []
    let countOfZero = 0

    for (const num of nums) {
        if (num % 2 === 0) {
            if (candidateStartAtZero.length === 0 || candidateStartAtZero[candidateStartAtZero.length - 1] === 1) {
                candidateStartAtZero.push(num % 2)
            }
            if (candidateStartAtOne[candidateStartAtOne.length - 1] === 1) {
                candidateStartAtOne.push(num % 2)
            }
            countOfZero++
        } else {
            if (candidateStartAtOne.length === 0 || candidateStartAtOne[candidateStartAtOne.length - 1] === 0) {
                candidateStartAtOne.push(num % 2)
            }
            if (candidateStartAtZero[candidateStartAtZero.length - 1] === 0) {
                candidateStartAtZero.push(num % 2)
            }
        }
    }

    return Math.max(countOfZero, nums.length - countOfZero, candidateStartAtZero.length, candidateStartAtOne.length)
};
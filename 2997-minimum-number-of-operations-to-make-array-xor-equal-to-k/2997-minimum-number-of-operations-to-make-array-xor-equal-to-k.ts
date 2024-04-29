function minOperations(nums: number[], k: number): number {
    const xorOfNums: number = nums.reduce((carr: number, num: number) => (carr ^ num), 0)
    let finalXor: number = xorOfNums ^ k
    let binaLengthFinalXor = finalXor.toString(2).length
    let res = 0

    while (finalXor !== 0) {
        finalXor ^= (1 << (binaLengthFinalXor - 1))
        binaLengthFinalXor = finalXor.toString(2).length
        res += 1
    }

    return res
};
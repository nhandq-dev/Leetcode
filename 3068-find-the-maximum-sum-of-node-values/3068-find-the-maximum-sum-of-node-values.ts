function maximumValueSum(nums: number[], k: number, edges: number[][]): number {
    let bestSumCount = 0
    let bestSum = nums.reduce((carr: number, item: number, idx: number) => {
        if ((item ^ k) > item) bestSumCount++
        nums[idx] = Math.max(item ^ k, item)
        return carr + nums[idx]
    }, 0)

    if (bestSumCount % 2 === 0) return bestSum

    const minMinus = nums.reduce((carr, item) => Math.min(carr, Math.abs(item - (item ^ k))), bestSum)
    return bestSum - minMinus
};

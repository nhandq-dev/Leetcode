function largestPerimeter(nums: number[]): number {
    let res = -1
    nums.sort((a, b) => a - b)
    const prefixSum: number[] = [nums[0], nums[0] + nums[1]]

    for (let i = 2; i < nums.length; i++) {
        [prefixSum[0], prefixSum[1]] = [prefixSum[1], prefixSum[1] + nums[i]]
        if (nums[i] < prefixSum[0]) {
            res = prefixSum[1]
        }
    }

    return res
};

function largestPerimeter(nums: number[]): number {
    let res = -1
    nums.sort((a, b) => a - b)
    const prefixSum: number[] = [nums[0], nums[0] + nums[1]]

    for (let i = 2; i < nums.length; i++) {
        prefixSum[i] = prefixSum[i-1] + nums[i]
        if (nums[i] < prefixSum[i-1]) {
            res = prefixSum[i]
        }
    }

    return res
};

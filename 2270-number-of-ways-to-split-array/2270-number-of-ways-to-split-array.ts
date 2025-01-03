function waysToSplitArray(nums: number[]): number {
    const total = nums.reduce((carry: number, num: number) => carry + num, 0)
    let currSum = 0
    let res = 0

    for (let i = 0; i < nums.length - 1; i++) {
        currSum += nums[i]
        if (currSum >= total - currSum) {
            res += 1
        }
    }

    return res
};
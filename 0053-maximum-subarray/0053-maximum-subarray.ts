function maxSubArray(nums: number[]): number {
    const n: number = nums.length
    const dp: number[] = []
    dp[0] = nums[0]
    let res = nums[0]

    for (let i=1; i<n; i++) {
        dp[i] = Math.max(nums[i], nums[i] + dp[i-1])
        res = Math.max(res, dp[i])
    }

    return res
};
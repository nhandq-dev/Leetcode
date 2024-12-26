function findTargetSumWays(nums: number[], target: number): number {
    let res = 0
    const dp = (idx: number, prefix: number) => {
        if (nums[idx] === undefined) {
            if (prefix === target) {
                res++
            }
            return
        }

        dp(idx + 1, prefix - nums[idx])
        dp(idx + 1, prefix + nums[idx])
    }
    dp(0, 0)

    return res
};
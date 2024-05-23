function beautifulSubsets(nums: number[], k: number): number {
    const n = nums.length
    if (n === 0) return 0
    let res = 0

    const dp = (idx: number, prevSet: number[]) => {
        if (idx === n) {
            res += prevSet.length ? 1 : 0
            return
        }
        if (prevSet.some((item: number) => Math.abs(item - nums[idx]) === k)) {
            dp(idx+1, prevSet)
            return
        }

        dp(idx + 1, prevSet.concat([nums[idx]]))
        dp(idx + 1, prevSet)
        return
    }
    dp(0, [])

    return res
};

/**
dp[i] number of beautiful subset that end at i


 */


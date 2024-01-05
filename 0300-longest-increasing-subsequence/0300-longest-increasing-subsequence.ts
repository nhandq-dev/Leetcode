function lengthOfLIS(nums: number[]): number {
    const dp: number[] = [];
    let res = 1;

    for (let i=0; i<nums.length; i++) {
        dp[i] = 1;
        for (let j=0; j<i; j++) {
            if (nums[i] > nums[j] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1
                res = Math.max(res, dp[i])
            }
        }
    }

    return res
};


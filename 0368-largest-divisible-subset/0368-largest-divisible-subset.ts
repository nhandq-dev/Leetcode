function largestDivisibleSubset(nums: number[]): number[] {
    const n = nums.sort((a, b) => a - b).length
    const dp = Array(n).fill(1)
    const pred = Array(n).fill(-1)
    const res = [];
    let max = 0;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++)
            if (nums[i] % nums[j] === 0 && dp[i] <= dp[j])
                dp[i] = dp[j] + 1, pred[i] = j;
        if (dp[i] > dp[max]) max = i;
    }
    while (max >= 0)
        res.push(nums[max]), max = pred[max];
    return res;
};
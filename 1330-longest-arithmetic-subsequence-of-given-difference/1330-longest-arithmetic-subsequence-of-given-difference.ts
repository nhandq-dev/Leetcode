function longestSubsequence(arr: number[], difference: number): number {
    const dp: number[] = [];

    for (let i=0; i<arr.length; i++) {
        dp[i] = 1;

        for (let j=i-1; j>=0; j--) {
            if (arr[i] - arr[j] === difference) {
                dp[i] = Math.max(dp[i], 1 + dp[j])
                break
            }
        }
    }

    return Math.max(...dp)
};

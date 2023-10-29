function longestSubsequence(arr: number[], difference: number): number {
    // if (arr.length === 1) return difference === 1 ? 1 : 0;
    const dp: number[] = [];
    let res = 1;

    for (let i=0; i<arr.length; i++) {
        dp[i] = 1;

        for (let j=i-1; j>=0; j--) {
            if (arr[i] - arr[j] === difference) {
                dp[i] = Math.max(dp[i], 1 + dp[j])
                break
            }
        }
        res = Math.max(res, dp[i])
    }

    // console.log(dp)
    return res
};

// 33/39
/**

2 - undefined => 3 - undefined = 0
              => 3 - 2 => 1 +

 */
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

// function lengthOfLIS(nums: number[]): number {
//     const memos: Map<string, number> = new Map();

//     const dp = (idx: number, lastIdx: number = undefined): number => {
//         if (nums[idx] === undefined) return 0;

//         if (!memos.has(`${idx}-${lastIdx}`)) {
//             if (!nums[lastIdx]) {
//                 memos.set(`${idx}-${lastIdx}`, Math.max(
//                     1 + dp(idx+1, idx),
//                     dp(idx+1, lastIdx)
//                 ))
//             } else if (nums[idx] > nums[lastIdx]) {
//                 memos.set(`${idx}-${lastIdx}`, nums[idx] - nums[lastIdx] === 1 ? 1 + dp(idx+1, idx) : Math.max(
//                     1 + dp(idx+1, idx),
//                     dp(idx+1, lastIdx)
//                 ))
//             } else {
//                 memos.set(`${idx}-${lastIdx}`, dp(idx+1, lastIdx))
//             }
//         }

//         return memos.get(`${idx}-${lastIdx}`);
//     }

//     return dp(0)
// };

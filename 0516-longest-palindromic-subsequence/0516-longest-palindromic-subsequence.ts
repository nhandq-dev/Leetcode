function longestPalindromeSubseq(s: string): number {
    const dp: number[][] = [];

    for (let i=0; i<s.length; i++) {
        dp[i] = [];
        dp[i][i] = 1;

        for (let j=i-1; j>=0; j--) {
            if (s[i] !== s[j]) {
                dp[i][j] = Math.max(dp[i][j+1], dp[i-1][j])
            } else {
                dp[i][j] = 2 + (dp[i-1][j+1] || 0);
            }
        }
    }

    return dp[s.length-1][0];
};
//       0   1   2   3   4
//       b   b   b   a   b
//0  b   1   2
//1  b       1
//2  b           1
//3  a               1
//4  b                   1

// function longestPalindromeSubseq(s: string): number {
//     const memos: Map<string, number> = new Map();
//     const isPalindromic = (s: string): boolean => {
//         return s.length === 1 || s.slice(0, Math.floor(s.length/2)) === s.slice(Math.ceil(s.length/2)).split('').reverse().join('')
//     }

//     const dp = (idx: number, carry: string = '', lastCheckIdx: number = 0): number => {
//         if (s[idx] === undefined) {
//             return 0;
//         }

//         if (!memos.has(`${idx}-${carry}`)) {
//             memos.set(
//                 `${idx}-${carry}`,
//                 Math.max(
//                     isPalindromic(`${carry}${s[idx]}`) ? carry.length+1 : 0,
//                     dp(idx+1, `${carry}${s[idx]}`),
//                     dp(idx+1, ``),
//                     dp(idx+1, `${carry}`),
//                 )
//             )
//         }

//         return memos.get(`${idx}-${carry}`)
//     }

//     return dp(0);
// };
function idxOfLetter(s: string): number {
    return s.charCodeAt(0) - 97
}

function longestIdealString(s: string, k: number): number {
    const n = s.length
    const dp = Array.from({ length: 26 }).map(_ => 0)
    let res = 0

    for (let i = 0; i < n; i++) {
        const currIdx = idxOfLetter(s[i])

        for (let j = 0; j <= k; j++) {
            dp[currIdx] = Math.max(dp[currIdx], (dp[currIdx - j] || 0) + 1)
        }
        for (let j = 1; j <= k; j++) {
            dp[currIdx] = Math.max(dp[currIdx], (dp[currIdx + j] || 0) + 1)
        }

        res = Math.max(res, dp[currIdx])
    }

    return res
}

/**
dp[i] = longest ideal subsequen that end at i
dp[i] = dp[j] + 1 with j < i and |s[i] - s[j]| <= k


 */
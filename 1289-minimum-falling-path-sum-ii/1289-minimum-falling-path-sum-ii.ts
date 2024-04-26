function minFallingPathSum(grid: number[][]): number {
    const n = grid.length
    if (n === 1) return grid[0][0]
    const dp: number[][] = Array.from({ length: n }).map(_ => Array.from({ length: n }).map(_ => Number.POSITIVE_INFINITY))
    let res = Number.POSITIVE_INFINITY
    // first row
    for (let i = 0; i < n; i++) {
        dp[0][i] = grid[0][i]
    }

    for (let i = 1; i < n - 1; i++) {
        for (let j = 0; j < n; j++) {
            // rank from [0, j-1]
            for (let k = 0; k < j; k++) {
                dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + grid[i][j])
            }
            // rank from [j+1, n-1]
            for (let k = j + 1; k < n; k++) {
                dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + grid[i][j])
            }
        }
    }

    // last row
    for (let j = 0; j < n; j++) {
        // rank from [0, j-1]
        for (let k = 0; k < j; k++) {
            dp[n - 1][j] = Math.min(dp[n - 1][j], dp[n - 1 - 1][k] + grid[n-1][j])
        }
        // rank from [j+1, n-1]
        for (let k = j + 1; k < n; k++) {
            dp[n - 1][j] = Math.min(dp[n - 1][j], dp[n - 1 - 1][k] + grid[n-1][j])
        }
        res = Math.min(res, dp[n - 1][j])
    }

    return res
};

/**
dp[i][j] is the minimum falling path at cell i, j
dp[i][j] = min([dp[i-1][0] -> d[i-1][j-1]], dp[i-1][j+1] -> dp[i-1][n-1]

 */
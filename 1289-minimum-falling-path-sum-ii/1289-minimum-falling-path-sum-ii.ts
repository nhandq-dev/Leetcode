function minFallingPathSum(grid: number[][]): number {
    const n = grid.length
    if (n === 1) return grid[0][0]
    const dp: number[][] = Array.from({ length: n }).map(_ => Array.from({ length: n }).map(_ => 0))
    let res = Number.POSITIVE_INFINITY
    // first row
    let [firstMin, secondMin] = [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
    for (let i = 0; i < n; i++) {
        dp[0][i] = grid[0][i]
        if (dp[0][i] < firstMin) {
            [firstMin, secondMin] = [dp[0][i], firstMin]
        } else if (dp[0][i] < secondMin) {
            secondMin = dp[0][i]
        }
    }

    for (let i = 1; i < n - 1; i++) {
        let [nextFirstMin, nextSecondMin] = [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]

        for (let j = 0; j < n; j++) {
            dp[i][j] = grid[i][j] + (dp[i - 1][j] === firstMin ? secondMin : firstMin)

            if (dp[i][j] < nextFirstMin) {
                [nextFirstMin, nextSecondMin] = [dp[i][j], nextFirstMin]
            } else if (dp[i][j] < nextSecondMin) {
                nextSecondMin = dp[i][j]
            }
        }

        [firstMin, secondMin] = [nextFirstMin, nextSecondMin]
    }

    // last row
    for (let j = 0; j < n; j++) {
        dp[n - 1][j] = grid[n - 1][j] + (dp[n - 1 - 1][j] === firstMin ? secondMin : firstMin)
        res = Math.min(res, dp[n - 1][j])
    }

    return res
};

/**
dp[i][j] is the minimum falling path at cell i, j
dp[i][j] = min([dp[i-1][0] -> d[i-1][j-1]], dp[i-1][j+1] -> dp[i-1][n-1]


[
    [2,2,1,2,2],
    [2,2,1,2,2],
    [2,2,1,2,2],
    [2,2,1,2,2],
    [2,2,1,2,2]]

 */
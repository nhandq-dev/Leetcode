interface DPItemInterface {
    rectangle: number   // []
    horizontal: number  // ----
    vertical: number    // |
}

class DPItem implements DPItemInterface {
    rectangle: number
    horizontal: number
    vertical: number

    constructor(r = 0, h = 0, v = 0) {
        this.rectangle = r
        this.horizontal = h
        this.vertical = v
    }
}

function parseDP(dp: DPItemInterface[][]): string[][] {
    return dp.reduce((carry: string[][], items: DPItemInterface[]) => {
        return [
            ...carry,
            items.reduce((c: string[], i: DPItemInterface) => {
                return [
                    ...c,
                    `${i.horizontal}-${i.vertical}-${i.rectangle}`
                ]
            }, [])
        ]
    }, [])
}

function maximalRectangle(matrix: string[][]): number {
    if (matrix.length === 0) return 0

    const m = matrix.length
    const n = matrix[0].length
    const dp: DPItemInterface[][] = Array.from<DPItemInterface[]>({ length: m + 1 }).map(_ => Array.from<DPItemInterface>({ length: n + 1 }).map(_ => new DPItem()))
    let res = 0

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                // update horizontal
                dp[i + 1][j + 1].horizontal = dp[i + 1][j].horizontal + 1

                // update vertical
                dp[i + 1][j + 1].vertical = dp[i][j + 1].vertical + 1

                // update rectangle
                dp[i + 1][j + 1].rectangle = Math.max(dp[i + 1][j + 1].vertical, dp[i + 1][j + 1].horizontal)
                if (dp[i + 1][j + 1].horizontal !== 1 && dp[i + 1][j + 1].vertical !== 1) {
                    let runner = 0
                    let minCandle = dp[i + 1][j + 1].vertical
                    let candidate = minCandle

                    // horizantal scan back
                    while (j - runner > 0 && dp[i + 1][j - runner].vertical !== 0) {
                        minCandle = Math.min(minCandle, dp[i + 1][j - runner].vertical)
                        candidate = Math.max(candidate, minCandle * (runner + 2))
                        runner++
                    }
                    dp[i + 1][j + 1].rectangle = Math.max(dp[i + 1][j + 1].rectangle, candidate)
                }

                res = Math.max(res, dp[i + 1][j + 1].rectangle)
            }
        }
    }
    // console.log(parseDP(dp))

    return res
};

/**

dp[i][j] = {
    retagle: is maximal retangle could made from i, j as a botton right corner
    horizontal: is maximal continuous horizontal that end at j
    vertical: is maximal continuous vertical tha end at i
}

dp[0][0] = matrix[0][0]

matrix[i][j] === 1
dp[i][j] = dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1]


    0      0     1     0   
    0      0     1     0   
    0      0     1     0   
    0      0     1     1   
    0      1     1     1   
    0      1     1     1   
    1      1     1     1   




    0      0     1     0   
    0      0     1     0   
    0      0     1     0   
    0      0     1     1   
    1      1     1     1   
    1      1     1     1   
    1      1     1     1   


 */
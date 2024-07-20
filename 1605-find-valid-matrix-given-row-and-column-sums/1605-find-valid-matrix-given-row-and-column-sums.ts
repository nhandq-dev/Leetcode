function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
    const m = rowSum.length
    const n = colSum.length
    const res: number[][] = Array.from({ length: m }, _ => Array.from({ length: n }, _ => 0))

    let i = 0, j = 0

    while (i < m && j < n) {
        if (rowSum[i] < colSum[j]) {
            res[i][j] = rowSum[i]
            colSum[j] -= rowSum[i]
            rowSum[i] = 0
            i++
        } else {
            res[i][j] = colSum[j]
            rowSum[i] -= colSum[j]
            colSum[j] = 0
            j++
        }
    }

    return res
};
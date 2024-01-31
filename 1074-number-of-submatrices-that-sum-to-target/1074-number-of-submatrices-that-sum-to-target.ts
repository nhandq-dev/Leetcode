function numSubmatrixSumTarget(matrix: number[][], target: number): number {
    const m = matrix.length
    const n = matrix[0].length
    const prefixSum: number[][] = Array.from({ length: m+1 }, () => Array.from({length: n+1}, () => 0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            prefixSum[i][j] = prefixSum[i - 1][j]
                                + prefixSum[i][j - 1]
                                + matrix[i - 1][j - 1]
                                - prefixSum[i - 1][j - 1]
        }
    }

    let res = 0
    for (let topRunner = 1; topRunner <= m; topRunner++) {
        for (let bottomRunner = topRunner; bottomRunner <= m; bottomRunner++) {
            for (let leftRunner = 1; leftRunner <= n; leftRunner++) {
                for (let rightRunner = leftRunner; rightRunner <= n; rightRunner++) {
                    const sum = 
                        prefixSum[bottomRunner][rightRunner]
                        - prefixSum[topRunner-1][rightRunner]
                        - prefixSum[bottomRunner][leftRunner-1]
                        + prefixSum[topRunner-1][leftRunner-1]

                    if (sum === target) {
                        res += 1
                    }
                }
            }
        }
    }

    return res
}

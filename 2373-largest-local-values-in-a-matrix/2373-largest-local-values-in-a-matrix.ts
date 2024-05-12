function largestLocal(grid: number[][]): number[][] {
    const res: number[][] = []
    const row = grid.length
    const col = grid[0].length

    for (let i=0; i<row-2; i++) {
        res[i] = []
        for (let j=0; j<col-2; j++) {
            let maxVal = Number.NEGATIVE_INFINITY

            for (let ii=0; ii<3; ii++) {
                for (let jj=0; jj<3; jj++) {
                    maxVal = Math.max(maxVal, grid[i+ii][j+jj])
                }
            }

            res[i][j] = maxVal
        }
    }

    return res
};
function luckyNumbers(matrix: number[][]): number[] {
    const m = matrix.length
    const n = matrix[0].length

    const res = []
    const minOfRow = matrix.map((row) => Math.min(...row))

    for (let i = 0; i < n; i++) {
        let rowHasMaxCol = -1
        const maxOfCol = matrix.reduce((carr, row, idx) => {
            if (row[i] > carr) {
                carr = row[i]
                rowHasMaxCol = idx

            }
            return carr
        }, 0)

        if (minOfRow[rowHasMaxCol] === maxOfCol) {
            res.push(maxOfCol)
        }
    }

    return res
};
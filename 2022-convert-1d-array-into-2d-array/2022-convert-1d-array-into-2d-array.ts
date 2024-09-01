function construct2DArray(original: number[], m: number, n: number): number[][] {
    if (m*n !== original.length) return []
    let runningRow = 0, runningCol = 0
    const res: number[][] = [[]]

    for (const num of original) {
        if (runningCol === n) {
            runningRow++
            runningCol = 0
            res[runningRow] = []
        }
        res[runningRow].push(num)
        runningCol++
    }

    return res
};
function onesMinusZeros(grid: number[][]): number[][] {
    const oneRow: number[] = []
    const zeroRow: number[] = []
    const oneCol: number[] = []
    const zeroCol: number[] = []
    const res: number[][] = []

    for (let i = 0; i < grid.length; i++) {
        [oneRow[i], zeroRow[i]] = grid[i].reduce((carry: number[], item: number) => {
            return item === 0 ? [
                carry[0],
                1 + carry[1]
            ] : [
                1 + carry[0],
                carry[1]
            ]
        }, [0, 0])
        res[i] = []

        for (let j = 0; j < grid[i].length; j++) {
            if (oneCol[j] === undefined || zeroCol[j] === undefined) {
                [oneCol[j], zeroCol[j]] = grid.reduce((carry: number[], item: number[]) => {
                    return item[j] === 0 ? [
                        carry[0],
                        1 + carry[1]
                    ] : [
                        1 + carry[0],
                        carry[1]
                    ]
                }, [0, 0])
            }

            res[i][j] = oneRow[i] + oneCol[j] - zeroRow[i] - zeroCol[j]
        }
    }

    return res
};
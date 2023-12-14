function onesMinusZeros(grid: number[][]): number[][] {
    const numRows = grid.length;
    const numCols = grid[0].length;

    const oneRow: number[] = Array(numRows).fill(0);
    const zeroRow: number[] = Array(numRows).fill(0);
    const oneCol: number[] = Array(numCols).fill(0);
    const zeroCol: number[] = Array(numCols).fill(0);
    const res: number[][] = Array(numRows).fill(null).map(() => Array(numCols).fill(0));

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (j === 0) {
                [oneRow[i], zeroRow[i]] = grid[i].reduce((carry: number[], item: number) => {
                    return item === 0 ? [carry[0], 1 + carry[1]] : [1 + carry[0], carry[1]];
                }, [0, 0]);
            }

            if (i === 0) {
                [oneCol[j], zeroCol[j]] = grid.reduce((carry: number[], item: number[]) => {
                    return item[j] === 0 ? [carry[0], 1 + carry[1]] : [1 + carry[0], carry[1]];
                }, [0, 0]);
            }

            res[i][j] = oneRow[i] + oneCol[j] - zeroRow[i] - zeroCol[j];
        }
    }

    return res;
}

function numSpecial(mat: number[][]): number {
    let res = 0

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 1) {
                if (
                    !mat.some((row: number[], idx: number) => row[j] === 1 && idx !==i) &&
                    !mat[i].some((col: number, idx: number) => col === 1 && idx !== j)
                ) {
                    res += 1
                }
            }
        }
    }

    return res;
};
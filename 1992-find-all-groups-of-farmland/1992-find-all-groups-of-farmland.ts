function findFarmland(land: number[][]): number[][] {
    const res: number[][] = []
    const checkedLand: Set<string> = new Set()

    for (let i = 0; i < land.length; i++) {
        for (let j = 0; j < land[i].length; j++) {
            if (land[i][j] === 1 && !checkedLand.has(`${i}-${j}`)) {
                // find right
                let right = j
                while (right < land[i].length) {
                    if (land[i][right + 1] !== 1) break
                    right++
                }

                // find bottom
                let bottom = i
                while (bottom < land.length) {
                    for (let k=j; k<=right; k++) {
                        checkedLand.add(`${bottom}-${k}`)
                    }
                    if (land[bottom + 1] === undefined || land[bottom + 1][j] === 0) break
                    bottom++
                }

                res.push([i, j, bottom, right])
                j = right + 1
            }
        }
    }

    return res
};
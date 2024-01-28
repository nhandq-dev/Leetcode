function numSubmatrixSumTarget(matrix: number[][], target: number): number {
    const n = matrix.length
    const m = matrix[0].length

    const isValidBox = (left: number, top: number, right: number, bottom: number): boolean => {
        if (left > right || top > bottom || left < 0 || top < 0 || right >= m || bottom >= n) {
            return false
        }

        return true
    }

    const memos: Map<string, number> = new Map()
    let res = 0
    const dfs = (left: number, top: number, right: number, bottom: number): number => {
        if (!isValidBox(left, top, right, bottom)) return 0

        if (!memos.has(`${left}-${top}-${right}-${bottom}`)) {
            if (left === right && top === bottom) {
                memos.set(`${left}-${top}-${right}-${bottom}`, matrix[top][left])
            } else {
                let res = 0
                let leftReduce = 0
                let rightReduce = 0
                let topReduce = 0
                let bottomReduce = 0

                // reduction from left side
                if (left < m - 1 && left !== right) {
                    leftReduce = dfs(left + 1, top, right, bottom)
                }

                // reduction from right side
                if (right > 0 && left !== right) {
                    rightReduce = dfs(left, top, right - 1, bottom)
                }

                // reduction from top side
                if (top < n - 1 && top !== bottom) {
                    topReduce = dfs(left, top + 1, right, bottom)
                }

                // reduction from bottom side
                if (bottom > 0 && top !== bottom) {
                    bottomReduce = dfs(left, top, right, bottom - 1)
                }

                if (left < m - 1 && left !== right) {
                    res = leftReduce + memos.get(`${left}-${top}-${left}-${bottom}`)
                }
                if (right > 0 && left !== right) {
                    res = rightReduce + memos.get(`${right}-${top}-${right}-${bottom}`)
                }
                if (top < n - 1 && top !== bottom) {
                    res = topReduce + memos.get(`${left}-${top}-${right}-${top}`)
                }
                if (bottom > 0 && top !== bottom) {
                    res = bottomReduce + memos.get(`${left}-${bottom}-${right}-${bottom}`)
                }

                memos.set(`${left}-${top}-${right}-${bottom}`, res)
            }

            if (memos.get(`${left}-${top}-${right}-${bottom}`) === target) {
                res += 1
            }
        }

        return memos.get(`${left}-${top}-${right}-${bottom}`)
    }
    // dfs(0, 0, m - 1, n - 1)

    for (let row = 0; row<n; row++) {
        for (let col = 1; col<m; col++) {
            matrix[row][col] += matrix[row][col-1]
        }
    }

    for (let i=0; i<m; i++) {
        for (let j=i; j<m; j++) {
            const map: Map<number, number> = new Map()
            map.set(0, 1)
            let sum = 0

            for (let row=0; row<n; row++) {
                sum += matrix[row][j] - (i > 0 ? matrix[row][i-1] : 0)
                res += map.get(sum - target) || 0
                map.set(sum, (map.get(sum) || 0) + 1)
            }
        }
    }

    return res
};

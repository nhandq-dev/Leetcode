function findPaths(m: number, n: number, maxMove: number, startRow: number, startColumn: number): number {
    const MOVE_ABLE = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    const mod = 10 ** 9 + 7
    const memos: Map<string, number> = new Map()

    const isOutOfBox = (x: number, y: number): boolean => {
        if (x < 0 || y < 0 || x >= m || y >= n) return true

        return false
    }

    const dfs = (x: number, y: number, limit: number): number => {
        if (isOutOfBox(x, y)) {
            return 1
        }
        if (limit === 0) {
            return 0
        }

        if (!memos.has(`${x},${y},${limit}`)) {
            let res = 0
            for (const possibleWay of MOVE_ABLE) {
                res += dfs(x + possibleWay[0], y + possibleWay[1], limit - 1)
            }

            memos.set(`${x},${y},${limit}`, res % mod)
        }

        return memos.get(`${x},${y},${limit}`)
    }

    return dfs(startRow, startColumn, maxMove)
};

/**

0   0   0

 */
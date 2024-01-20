function numIslands(grid: string[][]): number {
    let res = 0
    const checkedCell: Set<number> = new Set()
    const m = grid.length
    const n = grid[0].length
    const TRAVELING_PATH = [[0, 1], [1, 0], [0, -1], [-1, 0]]

    const traveling = (x: number, y: number): void => {
        if (grid[x] === undefined || grid[x][y] === undefined || grid[x][y] === '0' || checkedCell.has(n * x + y)) return

        checkedCell.add(n * x + y)
        for (const path of TRAVELING_PATH) {
            traveling(x + path[0], y + path[1])
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (checkedCell.has(n * i + j) || grid[i][j] === '0') {
                continue
            }

            res++
            traveling(i, j)
        }
    }

    return res
};
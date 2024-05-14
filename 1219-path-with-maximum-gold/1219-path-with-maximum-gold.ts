function getMaximumGold(grid: number[][]): number {
    const visited: Set<string> = new Set()

    const traveling = (x: number, y: number): number => {
        if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || visited.has(`${x}-${y}`)) {
            return 0
        }

        visited.add(`${x}-${y}`)

        if (grid[x][y] === 0) {
            return 0
        }

        const totalGold = grid[x][y] + Math.max(
            traveling(x - 1, y),
            traveling(x, y - 1),
            traveling(x + 1, y),
            traveling(x, y + 1)
        )

        visited.delete(`${x}-${y}`)

        return totalGold
    }

    let res = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] !== 0) {
                res = Math.max(res, traveling(i, j))
            }
        }
    }

    return res
};
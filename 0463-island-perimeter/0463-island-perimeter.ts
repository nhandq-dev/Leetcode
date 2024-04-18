const POSIBLE_MOVE = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
]

function islandPerimeter(grid: number[][]): number {
    let res = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const cell = grid[i][j]
            if (cell === 1) {
                res += 4

                for (const move of POSIBLE_MOVE) {
                    if (grid[i + move[0]] && grid[i + move[0]][j + move[1]] === 1) {
                        res -= 1
                    }
                }
            }
        }
    }

    return res
};
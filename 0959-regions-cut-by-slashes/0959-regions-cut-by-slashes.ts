const DIRECTION = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
]

function regionsBySlashes(grid: string[]): number {
    const n = grid.length
    const expandedGrid = Array.from({ length: n * 3 }, _ => Array.from({ length: n * 3 }))

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i].charAt(j) === '\\') {
                expandedGrid[i * 3][j * 3] = 1
                expandedGrid[i * 3 + 1][j * 3 + 1] = 1
                expandedGrid[i * 3 + 2][j * 3 + 2] = 1
            } else if (grid[i].charAt(j) === '/') {
                expandedGrid[i * 3][j * 3 + 2] = 1
                expandedGrid[i * 3 + 1][j * 3 + 1] = 1
                expandedGrid[i * 3 + 2][j * 3] = 1
            }
        }
    }

    const isValidCell = (i: number, j: number): boolean => {
        if (i < 0 || j < 0 || i >= n * 3 || j >= n * 3) {
            return false
        }

        return true
    }

    const fillIn = (i: number, j: number) => {
        if (!isValidCell(i, j) || expandedGrid[i][j] === 1) return

        expandedGrid[i][j] = 1
        for (const [row, col] of DIRECTION) {
            fillIn(i + row, j + col)
        }
    }

    let res = 0
    for (let i = 0; i < n * 3; i++) {
        for (let j = 0; j < n * 3; j++) {
            if (expandedGrid[i][j] !== 1) {
                fillIn(i, j)
                res++
            }
        }
    }

    return res
};
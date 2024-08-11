const DIRECTION = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0]
]

function countIslands(grid: number[][]): number {
    const rows = grid.length
    const cols = grid[0].length
    let res = 0
    const tempGrid = grid.map((row) => row.map(cell => cell))

    const isValidIsland = (i: number, j: number): boolean => {
        if (i < 0 || j < 0 || i >= rows || j >= cols || tempGrid[i][j] === 0) return false

        return true
    }

    const removeIsland = (i: number, j: number) => {
        if (!isValidIsland(i, j)) return
        tempGrid[i][j] = 0

        for (const [row, col] of DIRECTION) {
            removeIsland(i + row, j + col)
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (tempGrid[i][j] === 1) {
                res++
                removeIsland(i, j)
            }
        }
    }

    return res
}

function minDays(grid: number[][]): number {
    const rows = grid.length
    const cols = grid[0].length

    const initialIslandCount = countIslands(grid)

    if (initialIslandCount !== 1) return 0

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 0) continue

            grid[i][j] = 0
            const newIslandCount = countIslands(grid)

            if (newIslandCount !== 1) return 1

            grid[i][j] = 1
        }
    }

    return 2
};
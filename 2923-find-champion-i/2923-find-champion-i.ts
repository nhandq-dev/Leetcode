function findChampion(grid: number[][]): number {
    const n = grid.length
    let runner = 0
    let i = 0

    while (runner < n) {
        i = runner + 1

        while (i < n && grid[runner][i] === 1) {
            i++
        }

        if (i === n) break
        runner = i
    }

    return runner
};
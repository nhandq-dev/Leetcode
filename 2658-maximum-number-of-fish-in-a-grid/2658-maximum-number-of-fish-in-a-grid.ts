function findMaxFish(grid: number[][]): number {
    const memos: Set<string> = new Set()

    const dfs = (r: number, c: number): number => {
        if (grid[r] === undefined || grid[r][c] === undefined || grid[r][c] === 0 || memos.has(`${r}-${c}`)) return 0

        memos.add(`${r}-${c}`)
        return grid[r][c] +  dfs(r + 1, c) +  dfs(r - 1, c) +  dfs(r, c + 1) +  dfs(r, c - 1)
    }

    let res = 0
    for (let r=0; r<grid.length; r++) {
        for(let c=0; c<grid[r].length; c++) {
            memos.clear()
            res = Math.max(res, dfs(r, c))
        }
    }

    return res
};
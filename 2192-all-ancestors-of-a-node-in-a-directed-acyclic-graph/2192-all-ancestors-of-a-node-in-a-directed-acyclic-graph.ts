function getAncestors(n: number, edges: number[][]): number[][] {
    const parentOf: number[][] = Array.from({ length: n }, _ => [])
    const res: number[][] = Array.from({ length: n }, _ => [])

    for (const [from, to] of edges) {
        parentOf[to].unshift(from)
    }

    for (let i = 0; i < n; i++) {
        let bfs = [...parentOf[i]]
        const memo = new Set()

        while (bfs.length) {
            const cursor = bfs.pop()
            if (memo.has(cursor)) continue
            memo.add(cursor)
            res[i].unshift(cursor)
            bfs = parentOf[cursor].concat(bfs)
        }
        res[i].sort((a, b) => a-b)
    }

    return res
};

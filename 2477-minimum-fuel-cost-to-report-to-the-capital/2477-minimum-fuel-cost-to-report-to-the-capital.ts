function minimumFuelCost(roads: number[][], seats: number): number {
    const adj: Map<number, number[]> = new Map()

    for (const road of roads) {
        adj.set(road[0], [...(adj.get(road[0]) || []), road[1]])
        adj.set(road[1], [...(adj.get(road[1]) || []), road[0]])
    }

    let res = 0
    const dfs = (node: number, parent: number): number => {
        let counter = 1

        for (const child of (adj.get(node) || [])) {
            if (child !== parent) {
                counter += dfs(child, node)
            }
        }

        if (node !== 0) {
            res += Math.ceil(counter / seats)
        }

        return counter
    }
    dfs(0, -1)

    return res
};
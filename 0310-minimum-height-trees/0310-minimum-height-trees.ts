function findMinHeightTrees(n: number, edges: number[][]): number[] {
    if (n === 1) return [0]
    const nodeNeighbor: Map<number, Set<number>> = new Map()
    let listOfLeaves: number[] = []

    for (const [nodeA, nodeB] of edges) {
        if (!nodeNeighbor.has(nodeA)) {
            nodeNeighbor.set(nodeA, new Set())
        }
        if (!nodeNeighbor.has(nodeB)) {
            nodeNeighbor.set(nodeB, new Set())
        }
        nodeNeighbor.get(nodeA).add(nodeB)
        nodeNeighbor.get(nodeB).add(nodeA)
    }
    nodeNeighbor.forEach((neighbor: Set<number>, idx: number) => {
        if (neighbor.size === 1) listOfLeaves.push(idx)
    })

    while (n > 2) {
        const newLeaves = []
        for (const leaf of listOfLeaves) {
            const neighborOfLeaf = Array.from(nodeNeighbor.get(leaf))[0]
            nodeNeighbor.get(neighborOfLeaf).delete(leaf)

            if (nodeNeighbor.get(neighborOfLeaf).size === 1) {
                newLeaves.push(neighborOfLeaf)
            }
            nodeNeighbor.delete(leaf)
            if (nodeNeighbor.size === 1) {
                return newLeaves
            }
            n-=1
        }
        listOfLeaves = [...newLeaves]
    }

    return listOfLeaves
};
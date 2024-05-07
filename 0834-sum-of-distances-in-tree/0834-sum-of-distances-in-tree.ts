function sumOfDistancesInTree(n: number, edges: number[][]): number[] {
    const distanceOfNodes: number[] = Array.from({ length: n }, _ => 0)
    const childOfNodes: number[] = Array.from({ length: n }, _ => 1)
    const listOfChildren: number[][] = Array.from({ length: n }, _ => [])

    for (const edge of edges) {
        const [nodeA, nodeB] = edge
        listOfChildren[nodeA].push(nodeB)
        listOfChildren[nodeB].push(nodeA)
    }

    const bfs1 = (node: number, parent: number) => {
        for (const childrenNode of listOfChildren[node]) {
            if (childrenNode === parent) continue
            bfs1(childrenNode, node)
            childOfNodes[node] += childOfNodes[childrenNode]
            distanceOfNodes[node] += distanceOfNodes[childrenNode] + childOfNodes[childrenNode]
        }
    }
    bfs1(0, -1)

    const bfs2 = (node: number, parent: number) => {
        for (const childrenNode of listOfChildren[node]) {
            if (childrenNode === parent) continue
            distanceOfNodes[childrenNode] = distanceOfNodes[node] - childOfNodes[childrenNode] + (n - childOfNodes[childrenNode])
            bfs2(childrenNode, node)
        }
    }
    bfs2(0, -1)

    return distanceOfNodes
};

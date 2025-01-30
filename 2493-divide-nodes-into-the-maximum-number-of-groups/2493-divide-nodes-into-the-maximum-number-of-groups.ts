class UnionFind {
    private parent: number[]
    private rank: number[]
    private adjList: number[][]

    constructor(n: number) {
        this.parent = Array.from({ length: n + 1 }, (_, i: number) => i)
        this.rank = Array.from({ length: n + 1 }, _ => 1)
        this.adjList = Array.from({ length: n + 1 }, _ => [])
    }

    find(node: number): number {
        if (this.parent[node] !== node)
            this.parent[node] = this.find(this.parent[node])

        return this.parent[node]
    }

    union(node1: number, node2: number): void {
        this.adjList[node1].push(node2)
        this.adjList[node2].push(node1)
        const parent1: number = this.find(node1)
        const parent2: number = this.find(node2)

        if (this.rank[parent1] < this.rank[parent2]) {
            this.parent[parent1] = parent2
        } else if (this.rank[parent1] > this.rank[parent2]) {
            this.parent[parent2] = parent1
        } else {
            this.parent[parent2] = parent1
            this.rank[parent1]++
        }
    }

    get() {
        return [this.parent, this.rank]
    }

    getNumberOfGroup(node: number) {
        const queue: number[] = []
        const layerSeen: number[] = Array.from({ length: this.parent.length + 1 }, _ => -1)
        let deepLayer = 0
        queue.push(node)
        layerSeen[node] = 0

        while (queue.length !== 0) {
            const numOfNodeInLayer = queue.length

            for (let i = 0; i < numOfNodeInLayer; i++) {
                const currNode = queue.shift()

                for (const neighbor of this.adjList[currNode]) {
                    if (layerSeen[neighbor] === -1) {
                        layerSeen[neighbor] = deepLayer + 1
                        queue.push(neighbor)
                    } else {
                        if (layerSeen[neighbor] === deepLayer) return -1
                    }
                }
            }
            deepLayer++
        }

        return deepLayer
    }
}

function magnificentSets(n: number, edges: number[][]): number {
    const unionSet: UnionFind = new UnionFind(n)
    for (const [node1, node2] of edges) {
        unionSet.union(node1, node2)
    }

    let res = -1
    const numOfGroup: Map<number, number> = new Map()

    for (let node = 1; node <= n; node++) {
        const num = unionSet.getNumberOfGroup(node)

        if (num === -1) return -1
        const rootNode = unionSet.find(node)
        numOfGroup.set(rootNode, Math.max(
            numOfGroup.get(rootNode) || 0,
            num
        ))
    }

    let totalNumberOfGroups = 0
    numOfGroup.forEach((numberOfGroup: number, rootNode: number) => {
        totalNumberOfGroups += numberOfGroup
    })

    return totalNumberOfGroups
};
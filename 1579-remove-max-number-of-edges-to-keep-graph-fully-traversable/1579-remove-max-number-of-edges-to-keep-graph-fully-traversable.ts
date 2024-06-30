class UnionFind {
    private representative: number[]
    private componentSize: number[]
    private components: number

    constructor(n: number) {
        this.components = n
        this.representative = []
        this.componentSize = []

        for (let i = 0; i <= n; i++) {
            this.representative.push(i)
            this.componentSize.push(1)
        }
    }

    isOneNode() {
        return this.components === 1
    }

    find(n: number) {
        if (this.representative[n] === n) return n

        return this.find(this.representative[n])
    }

    union(x: number, y: number) {
        x = this.find(x)
        y = this.find(y)

        if (x === y) return 0

        if (this.componentSize[x] > this.componentSize[y]) {
            this.componentSize[x] += this.componentSize[y]
            this.representative[y] = x
        } else {
            this.componentSize[y] += this.componentSize[x]
            this.representative[x] = y
        }

        this.components--
        return 1
    }
}

function maxNumEdgesToRemove(n: number, edges: number[][]): number {
    const Alice: UnionFind = new UnionFind(n)
    const Bob: UnionFind = new UnionFind(n)
    let edgesRequired = 0

    for (const [type, from, to] of edges) {
        if (type === 3) {
            edgesRequired += Math.max(Alice.union(from, to), Bob.union(from, to))
        }
    }
    for (const [type, from, to] of edges) {
        switch (type) {
            case 1:
                edgesRequired += Alice.union(from, to)
                break
            case 2:
                edgesRequired += Bob.union(from, to)
                break
        }
    }

    if (Alice.isOneNode() && Bob.isOneNode()) {
        return edges.length - edgesRequired
    }

    return -1
};
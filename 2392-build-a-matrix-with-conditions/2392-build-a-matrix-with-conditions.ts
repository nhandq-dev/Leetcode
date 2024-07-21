function parseCondition(k: number, conditions: number[][]): number[] | false {
    const parentMap: Map<number, Set<number>> = new Map()
    const res: number[] = []
    const queueSet: Set<number> = new Set(Array.from({ length: k }, (_, idx) => idx + 1))

    for (const [parent, child] of conditions) {
        parentMap.set(child, (parentMap.get(child) || new Set()).add(parent))
        queueSet.delete(child)
    }
    const queue = Array.from(queueSet)

    while (queue.length) {
        const item = queue.pop()
        res.push(item)

        parentMap.forEach((parents, child) => {
            if (parents.has(item)) {
                parents.delete(item)

                if (parents.size === 0) {
                    queue.unshift(child)
                    parentMap.delete(child)
                } else {
                    parentMap.set(child, parents)
                }
            }
        })
    }

    return queue.length !== parentMap.size ? false : res
}

function buildMatrix(k: number, rowConditions: number[][], colConditions: number[][]): number[][] {
    const rowOrder: number[] | false = parseCondition(k, rowConditions)
    if (!rowOrder) return []

    const colOrder: number[] | false = parseCondition(k, colConditions)
    if (!colOrder) return []

    const res: number[][] = []

    for (let i = 0; i < k; i++) {
        res[i] = []
        const row = rowOrder[i]
        for (let j = 0; j < k; j++) {
            if (colOrder[j] === row) {
                res[i].push(row)
            } else {
                res[i].push(0)
            }
        }
    }

    return res
};
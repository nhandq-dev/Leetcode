function survivedRobotsHealths(positions: number[], healths: number[], directions: string): number[] {
    const n = positions.length
    const indices: number[] = Array.from({ length: n }, (_, idx: number) => idx)
    const res: number[] = []
    const stack: number[] = []

    indices.sort((a, b) => positions[a] - positions[b])

    for(const idx of indices) {
        if (directions.at(idx) === 'R') {
            stack.push(idx)
        } else {
            while (stack.length !== 0 && healths[idx] > 0) {
                const topIdx = stack.pop()

                if (healths[topIdx] > healths[idx]) {
                    healths[topIdx] -= 1
                    healths[idx] = 0
                    stack.push(topIdx)
                } else if (healths[topIdx] < healths[idx]) {
                    healths[topIdx] = 0
                    healths[idx] -= 1
                } else {
                    healths[topIdx] = 0
                    healths[idx] = 0
                }
            }
        }
    }

    return healths.filter(h => h > 0)
};
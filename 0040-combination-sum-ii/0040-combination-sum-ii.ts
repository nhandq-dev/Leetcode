function combinationSum2(candidates: number[], target: number): number[][] {
    const res: Set<string> = new Set()
    const currStack: number[] = []
    const n = candidates.length
    candidates.sort((a, b) => a - b)

    const backTracking = (idx: number) => {
        if (target < 0) return
        if (target === 0) {
            res.add(currStack.join(','))
            return
        }

        for (let i = idx; i < n && target >= candidates[i]; i++) {
            if (i > idx && candidates[i] === candidates[i - 1]) continue

            target -= candidates[i]
            currStack.push(candidates[i])

            backTracking(i + 1)

            target += candidates[i]
            currStack.pop()
        }
    }
    backTracking(0)

    return Array.from(res).map(str => str.split(',').map(s => parseInt(s)))
};
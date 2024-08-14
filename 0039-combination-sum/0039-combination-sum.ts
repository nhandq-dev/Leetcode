function combinationSum(candidates: number[], target: number): number[][] {
    const res: Set<string> = new Set()
    let currSum = 0
    const currStack: number[] = []
    candidates.sort((a, b) => a-b)

    const backTracking = (idx: number) => {
        if (candidates[idx] === undefined) return

        // option 1 choose the current num
        currSum += candidates[idx]
        currStack.push(candidates[idx])
        if (currSum === target) {
            res.add(currStack.join(','))
        } else if (currSum < target) {
            backTracking(idx + 1)
            backTracking(idx)
        }

        currSum -= candidates[idx]
        currStack.pop()
        backTracking(idx + 1)
        return
    }
    backTracking(0)

    return Array.from(res).map(str => str.split(',').map(s => parseInt(s)))
};
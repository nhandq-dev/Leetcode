function findErrorNums(nums: number[]): number[] {
    const res: number[] = []
    const rightSet: Set<number> = new Set()
    for (let i = 0; i < nums.length; i++) {
        rightSet.add(i + 1)
    }

    for (let i = 0; i < nums.length; i++) {
        if (rightSet.has(nums[i])) {
            rightSet.delete(nums[i])
        } else {
            res.push(nums[i])
        }
    }
    res.push(Array.from(rightSet)[0])
    return res
};
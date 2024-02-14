function rearrangeArray(nums: number[]): number[] {
    let res: number[] = Array.from({ length: nums.length })
    let nextPIdx = 0
    let nextNIdx = 1

    for (const num of nums) {
        if (num < 0) {
            res[nextNIdx] = num
            nextNIdx += 2
        } else {
            res[nextPIdx] = num
            nextPIdx += 2
        }
    }

    return res
};
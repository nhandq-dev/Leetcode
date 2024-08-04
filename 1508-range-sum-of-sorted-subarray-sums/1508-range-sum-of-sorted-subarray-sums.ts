function rangeSum(nums: number[], n: number, left: number, right: number): number {
    const sortedSum = new MinPriorityQueue()
    for (let i = 0; i < n; i++) {
        let sum = 0
        for (let j = i; j < n; j++) {
            sum += nums[j]
            sortedSum.enqueue(sum)
        }
    }

    const sortedArr = sortedSum.toArray()
    let res = 0

    for (let k = left - 1; k < right; k++) res += sortedArr[k].element

    return res
    return res
};
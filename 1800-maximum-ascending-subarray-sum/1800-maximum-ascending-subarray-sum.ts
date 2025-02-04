function maxAscendingSum(nums: number[]): number {
    let res = 0
    let i = 0

    while (i < nums.length) {
        let j = i + 1
        let candidate = nums[i]

        while (nums[j] > nums[j - 1] && j < nums.length) {
            candidate += nums[j]
            j++
        }

        i = j
        res = Math.max(res, candidate)
    }

    return res
};
function longestMonotonicSubarray(nums: number[]): number {
    let res = 1
    let i = 0
    let isIncreasing = nums[1] > nums[0]

    while (i < nums.length - 1) {
        let j = i + 1
        isIncreasing = nums[j] > nums[i]
        for (; j < nums.length; j++) {
            if (nums[j] > nums[j-1] && isIncreasing) {
                continue
            }
            if (nums[j] < nums[j-1] && !isIncreasing) {
                continue
            }
            break
        }

        res = Math.max(res, j - i)
        i = Math.max(j - 1, i + 1)
    }

    return res
};
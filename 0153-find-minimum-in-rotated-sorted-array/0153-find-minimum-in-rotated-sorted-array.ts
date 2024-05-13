function findMin(nums: number[]): number {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
        const m = l + Math.floor((r - l) / 2)

        if (nums[m] < nums[l]) {
            r = m
        } else if (nums[m] > nums[r]) {
            l = m
        } else {
            return nums[0]
        }

        if (l === r-1) {
            return Math.min(nums[l], nums[r])
        }
    }

    return nums[l % (nums.length - 1)]
};

/**

Statement

In a right ASC order if we have l < m < r
then nums[l] < nums[m] < nums[r]



 */
function findMin(nums: number[]): number {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
        const m = l + Math.floor((r - l) / 2)

        if (nums[m] < nums[l]) {
            r = m
        } else if (nums[m] > nums[r]) {
            l = m
        } else {
            return nums[l]
        }

        if (l === r-1) {
            return Math.min(nums[l], nums[r])
        }
    }

    return nums[l]
};
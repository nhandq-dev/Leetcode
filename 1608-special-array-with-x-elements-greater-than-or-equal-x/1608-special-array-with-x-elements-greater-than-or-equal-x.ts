function specialArray(nums: number[]): number {
    let res = -1
    nums.sort((a, b) => a - b)
    const n = nums.length

    const getFirstGreater = (num: number): number => {
        let l = 0, r = n - 1
        let candidate = n

        while (l <= r) {
            const m = l + Math.floor((r - l) / 2)

            if (nums[m] >= num) {
                candidate = m
                r = m - 1
            } else {
                l = m + 1
            }
        }
        return candidate
    }

    for (let i = 1; i <= n; i++) {
        const candidate = getFirstGreater(i)
        if (n - candidate === i) return i
    }

    return -1
};

/**
x must be in the range [1, n]

if the nums was sorted than we know exactly at index i ther have n-i item that >= nums[i]


 */
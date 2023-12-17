function minimumCost(nums: number[]): number {
    let minCost = Number.MAX_SAFE_INTEGER;
    nums.sort((a, b) => a - b)

    const isPalindromic = (num: number): boolean => {
        let numAsString = num.toString()

        while (numAsString.length > 1) {
            const first = numAsString[0]
            const last = numAsString[numAsString.length - 1]

            if (first !== last) return false
            numAsString = numAsString.slice(1, numAsString.length - 1)
        }

        return true
    }

    let left = nums[Math.floor(nums.length / 2)]
    let right = nums[Math.min(Math.ceil(nums.length / 2), nums.length-1)]

    while (!isPalindromic(left)) {
        left -= 1
    }
    while (!isPalindromic(right)) {
        right += 1
    }

    for (let i = left; i <= right; i++) {
        if (!isPalindromic(i)) continue

        minCost = Math.min(minCost, nums.reduce((carry, item) => carry + Math.abs(item - i), 0));
    }

    return minCost;
};
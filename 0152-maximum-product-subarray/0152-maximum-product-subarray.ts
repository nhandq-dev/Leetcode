function maxProduct(nums: number[]): number {
    let [maxSoFar, minSoFar] = [nums[0], nums[0]]
    let res = nums[0]

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i]
        const cache = num * maxSoFar

        maxSoFar = Math.max(num, num * maxSoFar, num * minSoFar)
        minSoFar = Math.min(num, cache, num * minSoFar)
        res = Math.max(res, maxSoFar)
    }

    return res
};
function minSwaps(nums: number[]): number {
    const n = nums.length
    let numberOf1 = 0
    let prefixSum: number[] = [0]
    let res = Number.POSITIVE_INFINITY

    for (const num of nums) {
        prefixSum.push(prefixSum[prefixSum.length - 1] + num)
        if (num === 1) numberOf1++
    }

    for (let i = 0; i <= n - numberOf1; i++) {
        res = Math.min(
            res,
            numberOf1 - (prefixSum[i + numberOf1] - prefixSum[i])
        )
    }
    for (let i = n - numberOf1 + 1; i < n; i++) {
        res = Math.min(
            res,
            numberOf1 - (prefixSum[n] - prefixSum[i] + prefixSum[((i + numberOf1) % n)])
        )
    }

    return res
};
function productExceptSelf(nums: number[]): number[] {
    const prefixProd: number[] = [nums[0]]
    const n = nums.length

    for (let i = 1; i < n; i++) {
        prefixProd[i] = prefixProd[i - 1] * nums[i]
    }

    const res = [prefixProd[n - 2]]
    const suffixProd = [nums[n - 1]]
    for (let i = n - 2; i > 0; i--) {
        suffixProd.unshift(suffixProd[0] * nums[i])
        res.unshift(prefixProd[i - 1] * suffixProd[1])
    }
    res.unshift(suffixProd[0])

    return res
};

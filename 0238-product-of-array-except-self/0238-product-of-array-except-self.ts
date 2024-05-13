function productExceptSelf(nums: number[]): number[] {
    let prefixProd = 1
    let res = []
    const n = nums.length

    for (const num of nums) {
        prefixProd *= num
        res.push(prefixProd)
    }

    let suffixProd = 1
    for (let i = n - 1; i > 0; i--) {
        res[i] = res[i-1] * suffixProd
        suffixProd *= nums[i]
    }
    res[0] = suffixProd

    return res
};

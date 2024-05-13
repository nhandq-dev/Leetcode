function productExceptSelf(nums: number[]): number[] {
    let prefixProd = 1
    let res = []
    const n = nums.length

    for (let i = 0; i < n; i++) {
        prefixProd *= nums[i]
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

/**

    1   2   3   4
    1   2   6   24
    24  24  12  4



    24  12  8   6


 */

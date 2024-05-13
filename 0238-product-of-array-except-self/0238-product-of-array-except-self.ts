function productExceptSelf(nums: number[]): number[] {
    const res = []
    let prefixProd = 1
    let suffixProd = 1

    for (let i = nums.length-1; i>=0; i--) {
        res[i] = suffixProd
        suffixProd *= nums[i]
    }

    return res.map((item, i) => {
        item *= prefixProd
        prefixProd *= nums[i]

        return item
    })
};

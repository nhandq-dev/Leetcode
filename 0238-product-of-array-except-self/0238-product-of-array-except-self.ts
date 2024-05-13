function productExceptSelf(nums: number[]): number[] {
    const res = []
    let temp = 1

    for (let i = nums.length-1; i>=0; i--) {
        res[i] = temp
        temp *= nums[i]
    }

    temp = 1
    return res.map((item, i) => {
        item *= temp
        temp *= nums[i]

        return item
    })
};

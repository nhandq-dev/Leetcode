function maximumTripletValue(nums: number[]): number {
    let res = 0
    const n = nums.length

    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                res = Math.max((nums[i] - nums[j]) * nums[k], res)
            }
        }
    }

    return res
};
function divideArray(nums: number[], k: number): number[][] {
    nums.sort((a, b) => a - b)
    const res: number[][] = []

    while (nums.length !== 0) {
        if (nums[2] - nums[0] > k) {
            return []
        }
        
        res.push([nums[0], nums[1], nums[2]])
        nums.splice(0, 3)
    }
    return res
};
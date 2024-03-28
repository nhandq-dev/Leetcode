function maxSubarrayLength(nums: number[], k: number): number {
    let res = 0
    const mapOfFreq: Map<number, number> = new Map()
    const numIndex: Map<number, number[]> = new Map()
    let leftBounder: number = -1

    for (let i = 0; i < nums.length; i++) {
        mapOfFreq.set(nums[i], (mapOfFreq.get(nums[i]) || 0) + 1)
        numIndex.set(nums[i], [...(numIndex.get(nums[i]) || []), i])

        if (mapOfFreq.get(nums[i]) > k) {
            res = Math.max(res, i - leftBounder - 1)
            leftBounder = Math.max(leftBounder, numIndex.get(nums[i]).shift())
            mapOfFreq.set(nums[i], mapOfFreq.get(nums[i])-1)
        }
    }

    return Math.max(res, nums.length - leftBounder - 1)
};
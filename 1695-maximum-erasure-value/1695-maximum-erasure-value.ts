function maximumUniqueSubarray(nums: number[]): number {
    const n = nums.length
    const setOfSubArr: Set<number> = new Set()
    let l = 0, r = 0
    let currSum = 0, answer = 0

    while (l < n && r < n) {
        setOfSubArr.add(nums[r])
        currSum += nums[r]

        // if there was a duplicate
        while (setOfSubArr.size !== r - l + 1) {
            setOfSubArr.delete(nums[l])
            setOfSubArr.add(nums[r])
            currSum -= nums[l]
            l++
        }

        answer = Math.max(answer, currSum)
        r++
    }

    return answer
};
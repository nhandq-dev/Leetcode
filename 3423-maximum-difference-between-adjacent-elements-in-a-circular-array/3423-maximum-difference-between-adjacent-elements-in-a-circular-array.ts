function maxAdjacentDistance(nums: number[]): number {
    const n = nums.length
    let answer = Math.abs(nums[0] - nums[n-1])

    for (let i=0; i<n-1; i++) {
        answer = Math.max(answer, Math.abs(nums[i] - nums[i+1]))
    }

    return answer
};
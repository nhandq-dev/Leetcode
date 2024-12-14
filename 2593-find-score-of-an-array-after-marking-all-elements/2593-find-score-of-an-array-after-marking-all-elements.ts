function findScore(nums: number[]): number {
    const sortedIdx = Array.from(nums.keys()).sort((a, b) => nums[a] - nums[b])
    const markedIdx = {}
    let res = 0

    for (let i = 0; i < sortedIdx.length; i++) {
        const smallestOne = sortedIdx[i]
        if (markedIdx[smallestOne]) continue

        markedIdx[smallestOne - 1] = true
        markedIdx[smallestOne] = true
        markedIdx[smallestOne + 1] = true
        res += nums[smallestOne]
    }

    return res
};

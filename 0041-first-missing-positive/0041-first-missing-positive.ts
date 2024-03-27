function firstMissingPositive(nums: number[]): number {
    let candidate = 1
    nums.sort((a, b) => a-b)

    for (const num of nums) {
        if (num < 1) continue
        if (num > candidate) return candidate
        candidate++
    }

    return candidate
};
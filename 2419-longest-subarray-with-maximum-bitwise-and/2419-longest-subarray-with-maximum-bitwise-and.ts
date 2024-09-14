function longestSubarray(nums: number[]): number {
    const n = nums.length
    let res = 0
    let windown = 0
    let windownVal = 0

    for (const num of nums) {
        if (num < windownVal) {
            res = Math.max(res, windown)
            windown = 0
            continue
        }

        if (num > windownVal) {
            windownVal = num
            windown = 1
            res = 1
            continue
        }
        windown++
        res = Math.max(res, windown)
    }

    return res
};
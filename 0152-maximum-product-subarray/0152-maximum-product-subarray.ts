function maxProduct(nums: number[]): number {
    const memos: Map<string, number> = new Map()

    const dp = (idx: number, prefix?: number) => {
        if (nums[idx] === undefined) return Number.NEGATIVE_INFINITY

        if (!memos.has(`${idx}-${prefix}`)) {
            memos.set(`${idx}-${prefix}`, Math.max(
                prefix ? prefix * nums[idx] : nums[idx],
                dp(idx + 1, prefix ? prefix * nums[idx] : nums[idx]),
                dp(idx + 1)
            ))
        }

        return memos.get(`${idx}-${prefix}`)
    }

    return dp(0)
};
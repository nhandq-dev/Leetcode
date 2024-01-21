function rob(nums: number[]): number {
    const memos: Map<number, number> = new Map()

    const dp = (idx: number): number => {
        if (nums[idx] === undefined) return 0

        if (!memos.has(idx)) {
            memos.set(idx, Math.max(
                nums[idx] + dp(idx+2),
                dp(idx+1)
            ))
        }

        return memos.get(idx)
    }

    return dp(0)
};
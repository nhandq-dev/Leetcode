function coinChange(coins: number[], amount: number): number {
    const memos: Map<string, number> = new Map()

    const dp = (idx: number, target: number) => {
        if (target === 0) return 0
        if (coins[idx] === undefined) return Number.POSITIVE_INFINITY
        if (target < coins[idx]) return dp(idx + 1, target)

        if (!memos.has(`${idx}-${target}`)) {
            memos.set(`${idx}-${target}`, Math.min(
                dp(idx + 1, target),
                1 + dp(idx, target - coins[idx]),
            ))
        }

        return memos.get(`${idx}-${target}`)
    }

    return dp(0, amount) === Number.POSITIVE_INFINITY ? -1 : dp(0, amount)
};
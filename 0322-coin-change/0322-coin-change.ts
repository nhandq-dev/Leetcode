function coinChange(coins: number[], amount: number): number {
    const dp = _.memoize((idx: number, target: number) => {
        if (target === 0) return 0
        if (coins[idx] === undefined) return Number.POSITIVE_INFINITY
        if (target < coins[idx]) return dp(idx + 1, target)

        return Math.min(
            dp(idx + 1, target),
            1 + dp(idx, target - coins[idx]),
        )
    }, (arg1, arg2) => `${arg1}-${arg2}`)
    const res = dp(0, amount)

    return res === Number.POSITIVE_INFINITY ? -1 : res
};
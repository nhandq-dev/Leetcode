function buyChoco(prices: number[], money: number): number {
    const memos: Map<string, number> = new Map()

    const dp = (idx: number, prefixSum: number): number => {
        if (prefixSum > money) {
            return Number.POSITIVE_INFINITY
        }
        if (prices[idx] === undefined) {
            return Number.POSITIVE_INFINITY
        }

        if (!memos.has(`${idx},${prefixSum}`)) {
            // first chocolate
            if (prefixSum === 0) {
                memos.set(`${idx},${prefixSum}`, Math.min(
                    dp(idx + 1, 0),
                    dp(idx + 1, prices[idx])
                ))
            } else { // second chocolate
                memos.set(`${idx},${prefixSum}`, Math.min(
                    money >= prefixSum + prices[idx] ? prefixSum + prices[idx] : Number.POSITIVE_INFINITY,
                    dp(idx + 1, prefixSum),
                    dp(idx + 1, prices[idx]),
                    dp(idx + 1, 0)
                ))
            }
        }

        return memos.get(`${idx},${prefixSum}`)
    }
    const res = dp(0, 0)

    return res === Number.POSITIVE_INFINITY ? money : money - res
};
function numSquares(n: number): number {
    const memos: Map<number, number> = new Map()

    const dp = (target: number): number => {
        if (target < 4) return target
        if (!memos.has(target)) {
            let candidate = Math.floor(Math.sqrt(target))
            let res = target

            for (let i = candidate; i > 1; i--) {
                res = Math.min(
                    1 + dp(target - i * i),
                    res
                )
            }

            memos.set(target, res)
        }

        return memos.get(target)
    }

    return dp(n)
};

function change(amount: number, coins: number[]): number {
    const memos: Map<string, number> = new Map();

    const dp = (idx: number, moneyLeft: number): number => {
        if (moneyLeft === 0) return 1;
        if (coins[idx] === undefined) return 0;

        if (!memos.has(`${idx},${moneyLeft}`)) {
            let res = 0;
            if (moneyLeft >= coins[idx]) {
                res += dp(idx, moneyLeft-coins[idx])
            }
            res += dp(idx+1, moneyLeft)

            memos.set(`${idx},${moneyLeft}`, res)
        }

        return memos.get(`${idx},${moneyLeft}`)
    }

    return dp(0, amount);
};

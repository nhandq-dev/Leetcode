function numRollsToTarget(n: number, k: number, target: number): number {
    const memos: Map<string, number> = new Map()

    const travel = (n: number, k: number, target: number): number => {
        if (target > k * n || target < n) return 0;

        switch (n) {
            case 0:
                return 0;
            case 1:
                return 1;
            default:
                let res: number = 0;
                const from: number = target > (n - 1) * k ? (k - n * k + target) : 1;
                const to: number = target <= k ? target - n + 1 : k;

                for (let i: number = from; i <= to; i++) {
                    if (memos.has(`${n - 1},${k},${target - i}`)) {
                        res += memos.get(`${n - 1},${k},${target - i}`)
                        continue;
                    }
                    memos.set(`${n - 1},${k},${target - i}`, travel(n - 1, k, target - i))
                    res += memos.get(`${n - 1},${k},${target - i}`)
                }

                memos.set(`${n},${k},${target}`, res)
                return res % (10 ** 9 + 7);
        }
    }
    return travel(n, k, target);
};
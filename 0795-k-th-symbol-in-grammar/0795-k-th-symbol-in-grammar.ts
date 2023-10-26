function kthGrammar(n: number, k: number): number {
    const memos: Map<string, number> = new Map();

    const dp2 = (row: number, idx: number): number => {
        switch (row) {
            case 1:
                return 0;
            case 2:
                return idx === 1 ? 0 : 1;
            case 3:
                return [0, 1, 1, 0][idx - 1];
            case 4:
                return [0, 1, 1, 0, 1, 0, 0, 1][idx - 1];

            default:
                if (!memos.has(`${row}-${idx}`)) {
                    const lastReturn = dp2(row-1, Math.ceil(idx/2))
                    memos.set(`${row}-${idx}`, idx%2 === 0 ? lastReturn === 1 ? 0 : 1 : lastReturn)
                }

                return memos.get(`${row}-${idx}`)
        }
    }

    return dp2(n, k)
};
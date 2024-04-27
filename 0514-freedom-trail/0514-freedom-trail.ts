function findRotateSteps(ring: string, key: string): number {
    const countStep = (idxFrom: number, idxTo: number): number => {
        const stepBetween = Math.abs(idxTo - idxFrom)
        const stepAround = ring.length - stepBetween
        return Math.min(stepBetween, stepAround)
    }

    const memos: Map<string, number> = new Map()
    const dp = (ringIdx: number, keyIdx: number): number => {
        if (!memos.has(`${ringIdx}-${keyIdx}`)) {
            if (keyIdx === key.length) {
                memos.set(`${ringIdx}-${keyIdx}`, 0)
                return 0
            }

            let minStep = Number.POSITIVE_INFINITY
            for (let i=0; i<ring.length; i++) {
                if (ring[i] === key[keyIdx]) {
                    const totalStep = countStep(ringIdx, i) + 1 + dp(i, keyIdx+1)
                    minStep = Math.min(minStep, totalStep)
                }
            }

            memos.set(`${ringIdx}-${keyIdx}`, minStep)
        }

        return memos.get(`${ringIdx}-${keyIdx}`)
    }

    return dp(0, 0)
};

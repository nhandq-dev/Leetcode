function minDifficulty(jobDifficulty: number[], d: number): number {
    if (d > jobDifficulty.length) return -1;
    if (d === 1) return Math.max(...jobDifficulty)
    const memos: Map<string, number> = new Map()

    const dp = (days: number, left: number): number => {
        if (days > jobDifficulty.length - left) { // if there was no engough job to schedule
            memos.set(`${days}-${left}`, Number.MAX_SAFE_INTEGER)
        }

        if (!memos.has(`${days}-${left}`)) {
            switch (days) {
                case jobDifficulty.length - left: // it was enough to schedule each job for each day
                    memos.set(`${days}-${left}`, jobDifficulty.slice(left).reduce((pre, curr) => pre + curr, 0))
                    break;

                case 1:
                    memos.set(`${days}-${left}`, Math.max(...jobDifficulty.slice(left)))
                    break;

                default:
                    let res = Number.MAX_SAFE_INTEGER
                    let max = jobDifficulty[left]

                    // run from left+1 to 
                    for (let right = left + 1; right <= jobDifficulty.length - days + 1; right++) {
                        res = Math.min(
                            res,
                            max + dp(days - 1, right),
                        )
                        max = Math.max(max, jobDifficulty[right])
                    }

                    memos.set(`${days}-${left}`, res)
                    break;
            }
        }

        return memos.get(`${days}-${left}`)
    }

    return dp(d, 0)
};


/**
 0 1 2 3 4 5
[6,5,4,3,2,1]
3




 */
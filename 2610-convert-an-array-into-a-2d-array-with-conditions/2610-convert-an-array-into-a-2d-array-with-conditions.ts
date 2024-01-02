function findMatrix(nums: number[]): number[][] {
    const res: Set<number>[] = []
    let n = 0

    for (const num of nums) {
        let added = false
        for (let i = 0; i < n; i++) {
            if (!res[i].has(num)) {
                res[i].add(num)
                added = true
                break
            }
        }

        if (!added) {
            res.push(new Set([num]))
            n += 1
        }
    }

    return res.map((item) => Array.from(item))
};
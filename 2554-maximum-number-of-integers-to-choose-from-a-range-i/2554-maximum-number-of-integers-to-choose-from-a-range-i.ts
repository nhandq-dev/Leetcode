function maxCount(banned: number[], n: number, maxSum: number): number {
    let res = 0
    let currSum = 0
    const bannedSet = new Set(banned)

    for (let i = 1; i <= n; i++) {
        if (bannedSet.has(i)) continue

        if (currSum + i > maxSum) {
            return res
        }

        currSum += i
        res += 1
    }

    return res
};
function equalSubstring(s: string, t: string, maxCost: number): number {
    const getChangeCost = _.memoize((char1: string, char2: string): number => Math.abs(char1.charCodeAt(0) - char2.charCodeAt(0)), (arg1: string, arg2: string) => `${arg1}-${arg2}`)
    const n = s.length
    let res = 0
    let l = 0, r = 0
    let candidate = 0

    while (l<n && r<n && n-l > res) {
        const changeCost = getChangeCost(s[r], t[r])
        while (changeCost > maxCost && r > l) {
            maxCost += getChangeCost(s[l], t[l])
            l++
            candidate--
        }
        if (changeCost > maxCost) {
            l++
            r++
            candidate = 0
            continue
        }

        maxCost -= changeCost
        r++
        candidate++
        res = Math.max(res, candidate)
    }

    return res
};
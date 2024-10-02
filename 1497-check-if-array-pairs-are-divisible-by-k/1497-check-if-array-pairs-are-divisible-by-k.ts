function canArrange(arr: number[], k: number): boolean {
    const modArr = arr.map(n => ((n % k) + k) % k).filter(n => n !== 0)
    if (modArr.length % 2 === 1) return false

    const freq = new Map()
    for (const n of modArr) {
        freq.set(n, (freq.get(n) || 0) + 1)
    }

    for (const n of modArr) {
        if (!freq.has(n)) continue
        if (freq.get((k - n) % k) !== freq.get(n)) return false

        freq.delete(n)
        freq.delete((k - n) % k)
    }

    return true
};
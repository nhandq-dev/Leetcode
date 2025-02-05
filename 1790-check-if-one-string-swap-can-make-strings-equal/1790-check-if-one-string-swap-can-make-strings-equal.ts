function areAlmostEqual(s1: string, s2: string): boolean {
    if (s1 === s2) return true
    const candidate = []

    for (let i = 0; i < s1.length; i++) {
        if (s1.charAt(i) !== s2.charAt(i)) {
            candidate.push(i)
        }
    }

    if (candidate.length !== 2) return false
    if (s1.charAt(candidate[0]) !== s2.charAt(candidate[1]) || s1.charAt(candidate[1]) !== s2.charAt(candidate[0])) return false

    return true
};
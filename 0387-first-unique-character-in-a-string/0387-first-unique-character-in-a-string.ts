function firstUniqChar(s: string): number {
    const sMap: Map<string, number> = new Map()
    const sSet: Set<string> = new Set()

    for (let i=0; i<s.length; i++) {
        if (!sSet.has(s[i])) {
            sSet.add(s[i])
            sMap.set(s[i], i)
        } else {
            sMap.delete(s[i])
        }
    }

    return sMap.size === 0 ? -1 : Array.from(sMap.values())[0]
};
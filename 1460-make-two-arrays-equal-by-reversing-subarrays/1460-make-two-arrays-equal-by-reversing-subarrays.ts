function canBeEqual(target: number[], arr: number[]): boolean {
    const mapOfTarget = new Map()

    for (const t of target) {
        mapOfTarget.set(t, (mapOfTarget.get(t) || 0) + 1)
    }

    for (const a of arr) {
        if (!mapOfTarget.has(a) || mapOfTarget.get(a) === 0) return false
        mapOfTarget.set(a, mapOfTarget.get(a) - 1)
    }
    
    return true
};
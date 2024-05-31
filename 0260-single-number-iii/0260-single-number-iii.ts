function singleNumber(nums: number[]): number[] {
    const setOfSingle: Set<number> = new Set()

    for (const num of nums) {
        if (setOfSingle.has(num)) {
            setOfSingle.delete(num)
        } else {
            setOfSingle.add(num)
        }
    }

    return Array.from(setOfSingle.values())
};
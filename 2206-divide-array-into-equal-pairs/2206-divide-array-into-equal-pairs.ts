function divideArray(nums: number[]): boolean {
    return nums.reduce((c: Set<number>, n: number) => {
        c.has(n) ? c.delete(n) : c.add(n)
        return c
    }, new Set()).size === 0
};
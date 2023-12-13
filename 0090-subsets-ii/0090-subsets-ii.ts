function subsetsWithDup(nums: number[]): number[][] {
    const res: Map<string, number[]> = new Map()
    nums.sort((a, b) => a-b)

    const traveling = (idx: number, prefix: number[]) => {
        if (nums[idx] === undefined) {
            res.set(JSON.stringify(prefix), prefix)
            return
        }

        traveling(idx+1, prefix)
        traveling(idx+1, [...prefix, nums[idx]])
    }
    traveling(0, [])

    return Array.from(res.values());
};
function subsets(nums: number[]): number[][] {
    const n = nums.length
    const res: number[][] = []
    res.push([])

    for (let i = 1; i < 2 ** n; i++) {
        const bina = i.toString(2)
        res.push(bina.split('').reduce((carr: number[], item: string, idx: number) => item === '1' ? [...carr, nums[idx + n - bina.length]] : carr, []))
    }

    return res
};
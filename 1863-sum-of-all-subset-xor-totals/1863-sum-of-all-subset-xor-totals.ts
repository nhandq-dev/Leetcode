function subsetXORSum(nums: number[]): number {
    const n = nums.length
    let res = 0

    for (let i = 1; i < 2 ** n; i++) {
        const bina = i.toString(2).padStart(n, '0')
        res += bina.split('').reduce((carr, item, idx) => item === '1' ? carr ^ nums[idx] : carr, 0)
    }

    return res
};
function subsetXORSum(nums: number[]): number {
    const n = 2 ** nums.length
    let res = 0

    for (let i=1; i<n; i++) {
        const bina = i.toString(2).padStart(nums.length, '0')
        console.log(bina)
        res += bina.split('').reduce((carr, item, idx) => item === '1' ? carr ^ nums[idx] : carr, 0)
    }

    return res
};
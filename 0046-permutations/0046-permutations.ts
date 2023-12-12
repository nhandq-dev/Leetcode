function permute(nums: number[]): number[][] {
    if (nums.length === 1) return [nums]

    let res: number[][] = [];

    for (let i: number = 0; i < nums.length; i++) {
        for (const subArr of permute([...nums.slice(0, i), ...nums.slice(i + 1)])) {
            res.push([nums[i], ...subArr]);
        }
    }

    return res;
};

function permute(nums: number[]): number[][] {
    switch (nums.length) {
        case 1:
            return [nums]
        default:
            let res: number[][] = [];

            for (let i: number = 0; i < nums.length; i++) {
                for (const subArr of permute([...nums.slice(0, i), ...nums.slice(i + 1)])) {
                    res.push([nums[i], ...subArr]);
                }
            }
            return res;
    }
};
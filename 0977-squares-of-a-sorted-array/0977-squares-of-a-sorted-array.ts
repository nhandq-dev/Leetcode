function sortedSquares(nums: number[]): number[] {
    if (nums[0] >= 0) return nums.map(x => x**2)
    let res: number[] = [];
    let i: number = 0;
    let j: number = nums.length - 1;

    while (i !== j) {
        if (Math.abs(nums[i]) < Math.abs(nums[j])) {
            res.unshift(Math.pow(nums[j], 2))
            j-=1;
        } else {
            res.unshift(Math.pow(nums[i], 2))
            i+=1;
        }
    }
    res.unshift(Math.pow(nums[i], 2))
    
    return res;
};
function maxSubArray(nums: number[]): number {
    let currentTotal: number = nums[0];
    let currentMax: number = nums[0];

    for (let i: number = 1; i<nums.length; i++) {
        currentTotal = Math.max(nums[i], currentTotal + nums[i]);
        currentMax = Math.max(currentMax, currentTotal);
    }
    
    return currentMax;
};

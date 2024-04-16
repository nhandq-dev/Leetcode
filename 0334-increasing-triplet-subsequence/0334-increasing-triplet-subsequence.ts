function increasingTriplet(nums: number[]): boolean {
    if (nums.length < 3) return false;
    let firstNum: number = nums[0];
    let secondNum: number = Number.MAX_SAFE_INTEGER;

    for (let i: number = 1; i<nums.length; i++) {
        if (nums[i] > secondNum) return true;
        
        if (nums[i] > firstNum) {
            secondNum = Math.min(secondNum, nums[i]);
        } else {
            firstNum = nums[i];
        }
    }
    return false;
};
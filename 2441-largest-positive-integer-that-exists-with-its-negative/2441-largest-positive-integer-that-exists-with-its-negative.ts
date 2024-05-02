function findMaxK(nums: number[]): number {
    let res: number = -1;
    let stack: {[key in number]: number} = {}
    stack[nums[0]] = 0;
    for (let i=1; i<nums.length; i++) {
        if (Math.abs(nums[i]) > res) {
            if (stack[-1*nums[i]] !== undefined) {
                res = Math.abs(nums[i]);
            }
        }
        stack[nums[i]] = i;
    }
    
    return res;
};
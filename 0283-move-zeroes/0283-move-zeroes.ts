/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    switch (nums.length) {
        case 1:
            return;
        case 2:
            if (nums[0] === 0) {
                nums.push(nums.shift())
            }
            return;
        default:
            let i: number = 0;
            let stop: number = nums.length - 1;
            
            while (i !== stop) {
                if (nums[i] === 0) {
                    nums.splice(i, 1);
                    nums.push(0);
                    stop -= 1;
                } else {
                    i += 1;
                }
            }
    }
};
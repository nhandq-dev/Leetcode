function getCountOfSubarraySumWithGoal(nums: number[], goal: number) {
    let n = nums.length, left = 0, right = 0, sum = 0, count = 0;

    for(right;right<n;right++){
        sum += nums[right];

        while(left<=right && sum > goal){
            sum -= nums[left];
            left++;
        }
        count += right-left+1;
    }
    return count;
}

function numSubarraysWithSum(nums: number[], goal: number): number {
    return getCountOfSubarraySumWithGoal(nums, goal) - getCountOfSubarraySumWithGoal(nums, goal - 1);
};
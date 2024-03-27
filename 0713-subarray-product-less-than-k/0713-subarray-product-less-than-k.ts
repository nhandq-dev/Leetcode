function numSubarrayProductLessThanK(nums: number[], k: number): number {
    if (k <= 1) {
        return 0;
    }

    let res = nums[0] < k ? 1 : 0;
    let window = nums[0];
    let left = 0;
    let right = 1;

    while(right < nums.length){
        if (nums[right] < k) res += 1
        window *= nums[right]

        while (window >= k && right > left) {
            window /= nums[left];
            left += 1
        }

        res += right - left
        right += 1
    }

    return res;
};
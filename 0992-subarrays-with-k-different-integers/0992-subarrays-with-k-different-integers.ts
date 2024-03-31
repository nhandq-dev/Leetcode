function subarraysWithKDistinct(nums: number[], k: number): number {
    let n = nums.length;

    function atMost(k: number) {
        let l = 0;
        let r = 0;
        let mp = new Map();
        let ans = 0;

        while (r < n) {
            mp.set(nums[r], (mp.get(nums[r]) || 0) + 1);

            while (mp.size > k) {
                if (mp.has(nums[l])) {
                    if (mp.get(nums[l]) === 1) mp.delete(nums[l]);
                    else mp.set(nums[l], mp.get(nums[l]) - 1);
                }
                l++;
            }

            ans += r - l+1;
            r++;
        }

        return ans;
    }

    return atMost(k) - atMost(k - 1);
};
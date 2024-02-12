function majorityElement(nums: number[]): number {
    let res = nums[0];
    const stack: Map<number, number> = new Map();

    for (const num of nums) {
        stack.set(num, 1 + (stack.get(num) || 0));

        if (stack.get(num) > stack.get(res)) {
            res = num;
        }
    }

    return res;
};
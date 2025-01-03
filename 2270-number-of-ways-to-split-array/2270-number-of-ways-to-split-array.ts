function waysToSplitArray(nums: number[]): number {
    const totalSum = nums.reduce((carry: number, num: number) => carry + num, 0);
    let leftSum = 0;
    let result = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        leftSum += nums[i];
        const rightSum = totalSum - leftSum;

        if (leftSum >= rightSum) {
            result++;
        }
    }

    return result;
};
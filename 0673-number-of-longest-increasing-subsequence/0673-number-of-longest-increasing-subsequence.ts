function findNumberOfLIS(nums: number[]): number {
    const n = nums.length;
    const lengthOfLIS: number[] = new Array(n).fill(1);
    const countOfLIS: number[] = new Array(n).fill(1);
    let maxLength = 0;
    let maxCount = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                if (lengthOfLIS[j] + 1 > lengthOfLIS[i]) {
                    lengthOfLIS[i] = lengthOfLIS[j] + 1
                    countOfLIS[i] = countOfLIS[j]
                } else if (lengthOfLIS[j] + 1 === lengthOfLIS[i]) {
                    countOfLIS[i] += countOfLIS[j]
                }
            }
        }

        if (lengthOfLIS[i] > maxLength) {
            maxLength = lengthOfLIS[i]
            maxCount = countOfLIS[i]
        } else if (lengthOfLIS[i] === maxLength) {
            maxCount += countOfLIS[i]
        }
    }

    return maxCount
}

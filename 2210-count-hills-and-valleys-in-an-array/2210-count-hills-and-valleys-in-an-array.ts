function countHillValley(nums: number[]): number {
    const n = nums.length

    let answer = 0
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] === nums[i-1]) continue
        let mostLeftIdx = i - 1
        let mostRightIdx = i + 1

        while (nums[mostLeftIdx] !== undefined && nums[mostLeftIdx] === nums[i]) {
            mostLeftIdx--
        }
        if (nums[mostLeftIdx] === undefined) continue

        while (nums[mostRightIdx] !== undefined && nums[mostRightIdx] === nums[i]) {
            mostRightIdx++
        }
        if (nums[mostRightIdx] === undefined) continue

        if (
            (nums[mostRightIdx] > nums[i] && nums[mostLeftIdx] > nums[i]) ||
            (nums[mostRightIdx] < nums[i] && nums[mostLeftIdx] < nums[i])
        ) answer++
    }

    return answer
};
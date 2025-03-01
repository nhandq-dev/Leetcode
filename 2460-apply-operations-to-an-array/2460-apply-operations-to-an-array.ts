function applyOperations(nums: number[]): number[] {
    let numOfZero = 0
    let runner = 0

    while (runner < nums.length - 1) {
        const num = nums[runner]
        if (num === 0) {
            nums.splice(runner, 1)
            numOfZero++
            continue
        }

        if (num === nums[runner + 1]) {
            nums.splice(runner, 2, num * 2)
            numOfZero++
        }
        runner++
    }

    return nums.concat(Array.from({ length: numOfZero }, _ => 0))
};
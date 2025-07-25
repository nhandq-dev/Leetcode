function maxSum(nums: number[]): number {
    const uniqArr = Array.from(new Set(nums))
    uniqArr.sort((a, b) => b - a)

    return uniqArr[0] <= 0 ? uniqArr[0] : uniqArr.filter(num => num > 0).reduce((curr, num) => curr + num)
};
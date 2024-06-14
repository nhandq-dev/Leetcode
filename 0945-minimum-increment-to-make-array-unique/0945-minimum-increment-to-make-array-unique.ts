function minIncrementForUnique(nums: number[]): number {
    let max = 0
    let min = Number.POSITIVE_INFINITY
    const arr: number[] = []
    for (const num of nums) {
        min = Math.min(min, num)
        max = Math.max(max, num)
        arr[num] = (arr[num] || 0) + 1
    }

    let exp = min
    let cost = 0
    for (let i = min; i <= max; i++) {
        for (let y = 0; y < arr[i]; y++) {
            if (i > exp) exp = i + 1
            else {
                cost += (exp - i)
                exp++
            }
        }
    }
    return cost
}
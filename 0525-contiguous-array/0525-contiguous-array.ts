function findMaxLength(nums: number[]): number {
    let res = 0, numOfZero = 0, numOfOne = 0
    const mapOfDiff: Map<number, number> = new Map()
    mapOfDiff.set(0, -1)

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            numOfZero++
        } else {
            numOfOne++
        }
        const diff = numOfOne - numOfZero

        if (mapOfDiff.has(diff)) {
            res = Math.max(res, i - mapOfDiff.get(diff))
        } else {
            mapOfDiff.set(diff, i)
        }
    }

    return res
};

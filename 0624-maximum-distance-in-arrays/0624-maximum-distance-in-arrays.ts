function maxDistance(arrays: number[][]): number {
    const n = arrays.length
    let res = 0
    let currMin = arrays[0][0]
    let currMax = arrays[0][arrays[0].length - 1]

    for (let i = 1; i < n; i++) {
        const newMin = arrays[i][0]
        const newMax = arrays[i][arrays[i].length - 1]

        res = Math.max(
            res,
            Math.abs(newMax - currMin),
            Math.abs(newMin - currMax)
        )

        currMin = Math.min(currMin, newMin)
        currMax = Math.max(currMax, newMax)
    }

    return res
};
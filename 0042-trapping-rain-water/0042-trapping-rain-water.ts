function trap(height: number[]): number {
    let res = 0
    const n = height.length

    for (let i = 1; i < n - 1; i++) {
        const biggestLeftBuilding = Math.max(...height.slice(0, i+1))
        const biggestRightBuilding = Math.max(...height.slice(i))

        res += Math.min(biggestLeftBuilding, biggestRightBuilding) - height[i]
    }

    return res
};

/**
*
* *
***
***


 */
function threeSum(nums: number[]): number[][] {
    const res: Map<string, number[]> = new Map()
    nums.sort((a, b) => a-b)
    console.log(nums)

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === nums[i-1])
        if (nums[i] > 0) break
        
        let leftRunner = i+1
        let rightRunner = nums.length - 1

        while (leftRunner < rightRunner) {
            const candidate = nums[i] + nums[leftRunner] + nums[rightRunner]

            if (candidate === 0) {
                res.set(`${nums[i]},${nums[leftRunner]},${nums[rightRunner]}`, [nums[i], nums[leftRunner], nums[rightRunner]])
                rightRunner--
                leftRunner++
            } else if (candidate > 0) {
                rightRunner--
            } else {
                leftRunner++
            }
        }
    }

    return Array.from(res.values())
};

/**
-4  -1  -1  0   1   2

 */
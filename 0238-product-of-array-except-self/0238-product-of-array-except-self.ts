function productExceptSelf(nums: number[]): number[] {
    let zeroIdx = -1
    const prefixProd: number[] = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            if (zeroIdx !== -1) return Array(nums.length).fill(0)
            zeroIdx = i
            prefixProd[i] = (prefixProd[i-1] || 1)
            continue
        }
        prefixProd[i] = (prefixProd[i-1] || 1) * nums[i]
    }

    if (zeroIdx !== -1) return Array.from({length: nums.length}).map((_, idx) => idx === zeroIdx ? prefixProd[prefixProd.length-1] : 0)

    const res = [prefixProd[prefixProd.length - 2]]
    const suffixProd = [nums[nums.length-1]]
    for (let i=nums.length-2; i>=0; i--) {
        suffixProd.unshift(suffixProd[0]*nums[i])
        res.unshift((prefixProd[i-1] || 1) * suffixProd[1])
    }

    return res
};


/**

1   2   3   4
1   2   6   24
            6

24
1*

 */
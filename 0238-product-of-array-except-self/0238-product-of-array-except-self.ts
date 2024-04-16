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

    const suffixProd = [nums[nums.length-1]]
    for (let i=nums.length-2; i>=0; i--) {
        suffixProd.unshift(suffixProd[0]*nums[i])
    }

    return Array.from({length: nums.length}).map((_, idx) => {
        if (idx === 0) {
            return suffixProd[1]
        } else if (idx === nums.length - 1) {
            return prefixProd[suffixProd.length - 2]
        }
        
        return prefixProd[idx-1] * suffixProd[idx+1]
    })
};


/**

1   2   3   4
1   2   6   24
24  24  12  4

24
1*

 */
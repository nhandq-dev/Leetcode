function productExceptSelf(nums: number[]): number[] {
    let productWithout0: number = 1;
    let zeroPosition: number = -1;

    for (let i=0; i<nums.length; i++) {
        if (nums[i] === 0) {
            if (zeroPosition !== -1) {
                return new Array(nums.length).fill(0);
            }
            zeroPosition = i;
        } else {
            productWithout0 *= nums[i];
        }
    }
    if (zeroPosition !== -1) {
        const result: number[] = new Array(nums.length).fill(0);
        result.splice(zeroPosition, 1, productWithout0)
        return result;
    }

    const res: number[] = [];
    for (let i=0; i<nums.length; i++) {
        res.push(productWithout0/nums[i]);
    }
    return res;
};
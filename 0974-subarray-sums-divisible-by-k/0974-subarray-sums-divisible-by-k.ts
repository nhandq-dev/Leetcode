function subarraysDivByK(nums: number[], k: number): number {
    let currSum = 0
    const mapOfSumRes: Map<number, number> = new Map()
    mapOfSumRes.set(0, 1)

    return nums.reduce((carr: number, num: number) => {
        currSum = (currSum + num % k + k) % k

        carr += mapOfSumRes.get(currSum) || 0
        mapOfSumRes.set(currSum, (mapOfSumRes.get(currSum) || 0) + 1)

        return carr
    }, 0)
};

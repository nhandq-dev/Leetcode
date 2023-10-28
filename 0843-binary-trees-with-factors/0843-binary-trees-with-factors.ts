function numFactoredBinaryTrees(arr: number[]): number {
    const dp: number[] = [];
    const mapValueByIdx: Map<number, number> = new Map();
    arr = arr.sort((a, b) => a-b)

    for (let i=0; i<arr.length; i++) {
        dp[i] = 1;
        mapValueByIdx.set(arr[i], i)

        for (let j=0; j<i; j++) {
            if (arr[i] % arr[j] === 0 && mapValueByIdx.has(arr[i] / arr[j])) {
                dp[i] += dp[j] * dp[mapValueByIdx.get(arr[i] / arr[j])]
            }
        }
    }

    return dp.reduce((carr: number, item: number) => carr+item, 0) % (Math.pow(10, 9) + 7)
};
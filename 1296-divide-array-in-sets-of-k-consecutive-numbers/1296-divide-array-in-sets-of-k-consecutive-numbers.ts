function isPossibleDivide(nums: number[], k: number): boolean {
    nums.sort((a, b) => a-b)
    const n = nums.length
    const buckets: number[] = Array.from({ length: n/k })
    const bucketSizes: number[] = Array.from({ length: n/k }, _ => 0)

    for (const num of nums) {
        let bucketIdx = 0

        while (
            bucketIdx < buckets.length && 
            buckets[bucketIdx] !== undefined && 
            (buckets[bucketIdx] !== num - 1 || bucketSizes[bucketIdx] >= k)
        ) {
            bucketIdx++
        }
        if (bucketIdx >= buckets.length) return false

        buckets[bucketIdx] = num
        bucketSizes[bucketIdx] += 1
    }

    return true
};
function splitArray(nums: number[], k: number): number {
    const n = nums.length
    const prefixSum: number[] = [0]
    for (let i = 0; i < n; i++) {
        prefixSum.push(prefixSum[prefixSum.length - 1] + nums[i])
    }

    const backTrack = _.memoize((idx: number, k: number) => {
        if (k === 1) return prefixSum[n] - prefixSum[idx]
        if (n - idx === k) return Math.max(...nums.slice(idx))

        let answer = Number.POSITIVE_INFINITY
        for (let i = idx + 1; i <= n - k + 1; i++) {
            if (prefixSum[i] === prefixSum[idx]) continue
            answer = Math.min(
                answer,
                Math.max(
                    prefixSum[i] - prefixSum[idx],
                    backTrack(i, k - 1)
                )
            )
        }
        return answer
    }, (arg1: number, arg2: number) => `${arg1},${arg2}`)

    return backTrack(0, k)
};
/**
    10  5   13  4   8   4   5   11  14  9   16  10  20  8
0   10  15  28  32  40  44  49  60  74  83  99  109 129 137
0   1   2   3   4   5   6   7   8   9   10  11  12  13  14
 */
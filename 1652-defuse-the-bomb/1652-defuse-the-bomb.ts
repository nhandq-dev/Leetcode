function decrypt(code: number[], k: number): number[] {
    const n = code.length
    if (k === 0) return Array.from({ length: n }, _ => 0)
    const prefixSum = [0]
    for (const c of code) prefixSum.push(prefixSum[prefixSum.length - 1] + c)

    const calSum = (startIdx: number, endIdx: number): number => {
        if (startIdx > endIdx) return 0;
        if (startIdx < 0 || endIdx >= n) return 0;
        
        return startIdx === 0 ? prefixSum[endIdx + 1] : prefixSum[endIdx + 1] - prefixSum[startIdx];
    }

    return code.map((_: number, idx: number) => {
        if (k < 0) {
            if (k * -1 > idx) {
                return calSum(0, idx - 1) + calSum(n + k + idx, n - 1)
            } else {
                return calSum(idx + k, idx - 1)
            }
        } else {
            if (idx + k >= n) {
                return calSum(idx + 1, n - 1) + calSum(0, k - (n - idx))
            } else {
                return calSum(idx + 1, idx + k)
            }
        }
    })
};
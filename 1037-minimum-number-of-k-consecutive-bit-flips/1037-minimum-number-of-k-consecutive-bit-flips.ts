function minKBitFlips(nums: number[], k: number): number {
    const n = nums.length
    const flipped: boolean[] = []
    let validFlipsFromPastWindown = 0
    let flipCount = 0

    for (let i=0; i<n; i++) {
        if (i >= k) {
            if (flipped[i-k]) {
                validFlipsFromPastWindown--
            }
        }

        if (validFlipsFromPastWindown % 2 === nums[i]) {
            if (i + k > n) {
                return -1
            }

            validFlipsFromPastWindown++
            flipped[i] = true
            flipCount++
        }
    }

    return flipCount
};
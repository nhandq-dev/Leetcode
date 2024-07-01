function threeConsecutiveOdds(arr: number[]): boolean {
    let count = 0

    for (const num of arr) {
        if (num % 2 === 0) {
            count = 0
        } else {
            count++
        }

        if (count === 3) return true
    }

    return false
};
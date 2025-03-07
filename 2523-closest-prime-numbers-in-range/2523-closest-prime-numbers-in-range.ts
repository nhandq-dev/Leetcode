function closestPrimes(left: number, right: number): number[] {
    let prevPrimer = -1, closestA = -1, closestB = -1
    let minDiff = Number.POSITIVE_INFINITY

    for (let candidate = left; candidate <= right; candidate++) {
        if (isPrimer(candidate)) {
            if (prevPrimer !== -1) {
                if (candidate - prevPrimer < minDiff) {
                    minDiff = candidate - prevPrimer
                    closestA = prevPrimer
                    closestB = candidate
                }
                if (candidate - prevPrimer < 3) return [prevPrimer, candidate]
            }
            prevPrimer = candidate
        }
    }

    return [closestA, closestB]
};

function isPrimer(n: number): boolean {
    if (n < 2) return false
    if (n < 4) return true
    if (n % 2 === 0) return false

    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) return false
    }

    return true
}

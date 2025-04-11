function isSymmetric(num: number): boolean {
    const n = `${num}`.length
    if (n % 2 === 1) return false
    const firstHaft = Math.floor(num / (Math.pow(10, n / 2)))
    const lastHaft = num % (Math.pow(10, n / 2))

    const sumOf = (s: string): number => {
        return s.split('').reduce((c, n) => c + parseInt(n), 0)
    }

    return sumOf(firstHaft.toString()) === sumOf(lastHaft.toString())
}

function countSymmetricIntegers(low: number, high: number): number {
    let res = 0

    for (let i = low; i <= high; i++) {
        if (isSymmetric(i)) {
            res++
        }
    }

    return res
};
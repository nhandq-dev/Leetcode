class SortedNumber {
    private nums: number[]

    constructor() {
        this.nums = []
    }

    insert(num: number) {
        let l = 0, r = this.nums.length - 1

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2)

            if (num < this.nums[mid]) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }

        this.nums.splice(l, 0, num)
    }

    remove(num: number) {
        let l = 0, r = this.nums.length - 1

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2)

            if (num === this.nums[mid]) {
                this.nums.splice(mid, 1)
                return
            } else if (num < this.nums[mid]) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
    }

    get() {
        return this.nums
    }

    getAt(idx: number) {
        return this.nums[idx]
    }
}

function minDays(bloomDay: number[], m: number, k: number): number {
    const n = bloomDay.length
    if (m * k > n) return -1
    const sortedBloomDays = Array.from(new Set([...bloomDay].sort((a, b) => a - b)))
    let res = -1

    const bouquetStartFrom: number[] = []
    const currentWindown = new SortedNumber()
    for (let i = 0; i < k; i++) {
        currentWindown.insert(bloomDay[i])
    }
    for (let i = 0; i <= n - k; i++) {
        bouquetStartFrom.push(currentWindown.getAt(k - 1))
        currentWindown.remove(bloomDay[i])
        currentWindown.insert(bloomDay[i + k])
    }

    const canMakeMBouquets = (day: number): boolean => {
        let bouquetsCanMake = 0

        for (let i = 0; i <= n - k; i++) {
            if (bouquetStartFrom[i] <= day) {
                bouquetsCanMake++
                i += k - 1
            }
        }

        return bouquetsCanMake >= m
    }

    let l = 0, r = sortedBloomDays.length - 1;
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2)

        if (canMakeMBouquets(sortedBloomDays[mid])) {
            r = mid - 1
            res = sortedBloomDays[mid]
        } else {
            l = mid + 1
        }
    }

    return res
};

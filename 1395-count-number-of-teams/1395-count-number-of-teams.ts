class SortedNum {
    private nums: number[]

    constructor (nums: number[] = []) {
        this.nums = nums
    }

    // O(log(n))
    insert(num: number) {
        if (this.nums.length === 0) {
            this.nums.push(num)
        } else {
            let l = 0, r = this.nums.length - 1

            while (l <= r) {
                const m = l + Math.floor((r - l)/ 2)

                if (num <= this.nums[m]) {
                    r = m - 1
                } else {
                    l = m + 1
                }
            }

            this.nums.splice(l, 0, num)
        }
    }

    // O(1)
    get(): number[] {
        return [...this.nums]
    }

    // O(log(n))
    getBiggerThan(num: number): number[] {
        let l = 0, r = this.nums.length - 1

        while (l <= r) {
            const m = l + Math.floor((r - l)/ 2)

            if (num < this.nums[m]) {
                r = m - 1
            } else {
                l = m + 1
            }
        }

        return [...this.nums.slice(l)]
    }

    // O(log(n))
    getSmallerThan(num: number): number[] {
        let l = 0, r = this.nums.length - 1

        while (l <= r) {
            const m = l + Math.floor((r - l)/ 2)

            if (num < this.nums[m]) {
                r = m - 1
            } else {
                l = m + 1
            }
        }

        return [...this.nums.slice(0, l)]
    }
}

function numTeams(rating: number[]): number {
    const n = rating.length
    const setOfQueue: number[][][] = []
    const currQueue = new SortedNum()
    const idxOfRating: Map<number, number> = new Map()

    // nlog(n)
    for (let i = n - 1; i >= 1; i--) {
        currQueue.insert(rating[i])
        setOfQueue.unshift([currQueue.getBiggerThan(rating[i-1]), currQueue.getSmallerThan(rating[i-1])])
        idxOfRating.set(rating[i], i)
    }

    let res = 0

    for (let i = 0; i < n - 2; i++) {
        const currRate = rating[i]
        const biggerThanCurr = setOfQueue[i][0]
        const smallerThanCurr = setOfQueue[i][1]

        if (biggerThanCurr.length >= 2) {
            for (const bigger of biggerThanCurr) {
                res += idxOfRating.get(bigger) < n - 1 ? setOfQueue[idxOfRating.get(bigger)][0].length : 0
            }
        }
        if (smallerThanCurr.length >= 2) {
            for (const smaller of smallerThanCurr) {
                res += idxOfRating.get(smaller) < n - 1 ? setOfQueue[idxOfRating.get(smaller)][1].length : 0
            }
        }
    }


    return res
};

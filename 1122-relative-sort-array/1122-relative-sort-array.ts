class SortedNums {
    private nums: number[]

    constructor() {
        this.nums = []
    }

    insert(num) {
        if (this.nums.length === 0) {
            this.nums.push(num)
            return
        }

        let l = 0, r = this.nums.length - 1

        while (l <= r) {
            const mid = l + Math.floor((r-l)/2)

            if (this.nums[mid] <= num) {
                l = mid + 1
            } if (this.nums[mid] > num) {
                r = mid - 1
            }
        }

        this.nums.splice(l, 0, num)
    }

    get() {
        return this.nums
    }
}

function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    const arr2Freq: number[] = []
    const mapOfArr2: Map<number, number> = arr2.reduce((carr: Map<number, number>, num: number, idx: number) => {
        carr.set(num, idx)
        arr2Freq.push(0)
        return carr
    }, new Map())

    const restOfArr1: SortedNums = new SortedNums()

    for (const num of arr1) {
        if (mapOfArr2.has(num)) {
            arr2Freq[mapOfArr2.get(num)] += 1
        } else {
            restOfArr1.insert(num)
        }
    }

    return arr2Freq.reduce((carr: number[], freq: number, idx: number) => {
        for (let i=0; i<freq; i++) carr.push(arr2[idx])
        return carr
    }, []).concat(restOfArr1.get())
};
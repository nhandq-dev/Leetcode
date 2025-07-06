class FindSumPairs {
    private nums1: number[] = []
    private nums2: number[] = []
    private nums2Freq: Map<number, number> = new Map()

    constructor(nums1: number[], nums2: number[]) {
        this.nums1 = nums1
        this.nums2 = nums2

        for (const num of nums2) {
            this.nums2Freq.set(num, (this.nums2Freq.get(num) || 0) + 1)
        }
    }

    add(index: number, val: number): void {
        const oldVal = this.nums2[index]
        const newVal = oldVal + val

        this.nums2.splice(index, 1, newVal)
        this.nums2Freq.set(oldVal, this.nums2Freq.get(oldVal) - 1)
        this.nums2Freq.set(newVal, (this.nums2Freq.get(newVal) || 0) + 1)
    }

    count(tot: number): number {
        let answer = 0

        for (const num of this.nums1) {
            if (this.nums2Freq.has(tot - num)) {
                answer += this.nums2Freq.get(tot - num)
            }
        }

        return answer
    }
}

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */
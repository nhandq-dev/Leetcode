class KthLargest {
    private nums: number[]
    private k: number

    constructor(k: number, nums: number[]) {
        this.k = k
        nums.sort((a, b) => b - a)
        this.nums = nums.length <= k ? nums : Array.from({ length: k }, (_, idx: number) => nums[idx])
    }

    add(val: number): number {
        if (this.nums.length < this.k) {
            this.nums.push(val)
            this.nums.sort((a, b) => b - a)
            return this.nums[this.nums.length-1]
        }
        
        for (let i=0; i<this.nums.length; i++) {
            if (val > this.nums[i]) {
                this.nums.splice(i, 0, val)
                this.nums.pop()
                break
            }
        }

        return this.nums[this.nums.length-1]
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
function maxSubsequence(nums: number[], k: number): number[] {
    const meanHeap = new MinPriorityQueue<{
        idx: number,
        value: number
    }>((num) => num.value);
    let i = 0

    while (i < nums.length) {
        if (meanHeap.size() < k) {
            meanHeap.push({
                idx: i,
                value: nums[i]
            })
        } else {
            if (meanHeap.front().value < nums[i]) {
                meanHeap.dequeue()
                meanHeap.push({
                    idx: i,
                    value: nums[i]
                })
            }
        }

        i++
    }
    const answerFromHeap = meanHeap.toArray()
    answerFromHeap.sort((num1, num2) => num1.idx - num2.idx)

    return answerFromHeap.map(num => nums[num.idx])
};
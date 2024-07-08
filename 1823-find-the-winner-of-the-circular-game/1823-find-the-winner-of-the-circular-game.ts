function findTheWinner(n: number, k: number): number {
    const nums: number[] = Array.from({ length: n }, (_, idx: number) => idx + 1)
    let currIdx = 0

    while (nums.length > 1) {
        currIdx = (currIdx + k) % nums.length - 1
        currIdx = currIdx === -1 ? nums.length - 1 : currIdx

        nums.splice(currIdx, 1)
    }

    return nums[0]
};
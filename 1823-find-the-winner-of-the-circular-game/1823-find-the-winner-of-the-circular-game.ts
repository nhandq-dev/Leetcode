function findTheWinner(n: number, k: number): number {
    const friends: number[] = Array.from({ length: n }, (_, idx: number) => idx + 1)

    const travelling = (nums: number[], currIdx: number): number => {
        if (nums.length === 1) return nums[0]

        currIdx = (currIdx + k) % nums.length - 1
        currIdx = currIdx === -1 ? nums.length - 1 : currIdx
        nums.splice(currIdx, 1)
        return travelling(nums, currIdx % nums.length)
    }

    return travelling(friends, 0)
};
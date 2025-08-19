function zeroFilledSubarray(nums: number[]): number {
    let answer = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            let j = i

            while (nums[j] === 0) j++

            answer += ((j - i + 1) * (j - i)) / 2
            i = j
        }
    }

    return answer
};
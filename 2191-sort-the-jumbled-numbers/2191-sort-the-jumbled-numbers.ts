function sortJumbled(mapping: number[], nums: number[]): number[] {
    const numMap: number[][] = nums.map((num, idx) => {
        const mapped = num.toString().split('').map(c => mapping[parseInt(c)]).join('')
        return [parseInt(mapped), idx, num]
    })
    numMap.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])

    return numMap.map(num => num[2])
};

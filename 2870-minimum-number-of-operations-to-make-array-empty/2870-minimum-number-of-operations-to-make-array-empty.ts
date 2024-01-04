function minOperations(nums: number[]): number {
    const numberFrequence: Map<number, number> = new Map()

    for (const num of nums) {
        numberFrequence.set(num, (numberFrequence.get(num) || 0) + 1)
    }
    const frequencese: number[] = Array.from(numberFrequence.values())

    let res = 0
    for (const fre of frequencese) {
        if (fre === 1) {
            return -1
        }

        res += Math.floor(fre/3) + (fre%3 === 0 ? 0 : 1)
    }

    return res
};

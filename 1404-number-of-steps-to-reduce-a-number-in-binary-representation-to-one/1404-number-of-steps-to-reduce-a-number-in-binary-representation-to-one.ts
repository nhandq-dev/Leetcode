function numSteps(s: string): number {
    const produceAdd = _.memoize((str: string) => {
        const lastIdxOfZero = str.lastIndexOf('0')
        if (lastIdxOfZero === -1) return '1'.padEnd(str.length + 1, '0')
        const newStr = str.slice(0, lastIdxOfZero) + '1'

        return newStr.padEnd(str.length, '0')
    })
    let count = 0

    while (s !== '1') {
        if (s.at(-1) === '1') {
            s = produceAdd(s)
        } else {
            s = s.slice(0, -1)
        }
        count++
    }

    return count
};
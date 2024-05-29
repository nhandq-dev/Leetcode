function numSteps(s: string): number {
    const produceAdd = _.memoize((str: string) => {
        const n = str.length
        let runner = n - 1

        while (str.at(runner) === '1' && runner >= 0) {
            str = str.slice(0, runner) + '0' + str.slice(runner + 1)
            runner--
        }
        if (runner < 0) return `1${str}`
        str = str.slice(0, runner) + '1' + str.slice(runner + 1)

        return str
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
function sequentialDigits(low: number, high: number): number[] {
    const res: number[] = []
    let candidate = toSequentialDigits(low)

    while (candidate <= high) {
        res.push(candidate)
        candidate = toSequentialDigits(candidate+1)
    }

    return res
};

function toSequentialDigits(num: number): number {
    let candidate = new Array(num.toString().length).fill(0).map((_, i) => i + parseInt(num.toString()[0])).join('')

    let candidateRunner = 0
    while (parseInt(candidate) < num) {
        candidateRunner += 1
        candidate = new Array(num.toString().length).fill(0).map((_, i) => i + parseInt(num.toString()[0]) + candidateRunner).join('')
    }

    if (candidate.toString().length > num.toString().length) {
        const lowestNumWithBiggerLength = parseInt((1 << num.toString().length).toString(2))
        return parseInt(new Array(lowestNumWithBiggerLength.toString().length).fill(0).map((_, i) => i + parseInt(lowestNumWithBiggerLength.toString()[0])).join(''))
    }

    return parseInt(candidate);
}
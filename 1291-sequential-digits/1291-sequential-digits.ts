function sequentialDigits(low: number, high: number): number[] {
    const res: number[] = []
    let lowDigiRunner = 0
    let lowestSequential = new Array(low.toString().length).fill(0).map((_, i) => i + parseInt(low.toString()[0]) + lowDigiRunner).join('')

    if (lowestSequential.toString().length > low.toString().length) {
        lowDigiRunner = 0
        low = parseInt((1 << low.toString().length).toString(2))
        lowestSequential = new Array(low.toString().length).fill(0).map((_, i) => i + parseInt(low.toString()[0]) + lowDigiRunner).join('')
    }

    while (parseInt(lowestSequential) < low) {
        if (lowestSequential[lowestSequential.length-1] === '9') {
            lowDigiRunner = 0
            low = parseInt((1 << low.toString().length).toString(2))
            lowestSequential = new Array(low.toString().length).fill(0).map((_, i) => i + parseInt(low.toString()[0]) + lowDigiRunner).join('')
            continue
        }

        lowDigiRunner += 1
        lowestSequential = new Array(low.toString().length).fill(0).map((_, i) => i + parseInt(low.toString()[0]) + lowDigiRunner).join('')
    }

    while (parseInt(lowestSequential) <= high) {
        res.push(parseInt(lowestSequential))

        if (lowestSequential[lowestSequential.length-1] === '9') {
            lowDigiRunner = 0
            low = parseInt((1 << low.toString().length).toString(2))
            lowestSequential = new Array(low.toString().length).fill(0).map((_, i) => i + parseInt(low.toString()[0]) + lowDigiRunner).join('')
            continue
        }

        lowDigiRunner += 1
        lowestSequential = new Array(low.toString().length).fill(0).map((_, i) => i + parseInt(low.toString()[0]) + lowDigiRunner).join('')
    }

    return res
};
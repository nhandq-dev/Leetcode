function reorderedPowerOf2(n: number): boolean {
    const length = n.toString().length
    const nAsSorted = `${n}`.split('').sort().join('')

    const minCandidate = Math.ceil(Math.log2(Math.pow(10, length - 1)))
    const maxCandidate = Math.floor(Math.log2(Math.pow(10, length)))

    for (let i=minCandidate; i<=maxCandidate; i++) {
        const powOf2 = Math.pow(2, i)
        const sorted = `${powOf2}`.split('').sort().join('')
        if (sorted === nAsSorted) return true
    }
    console.log(minCandidate, maxCandidate)

    return false
};
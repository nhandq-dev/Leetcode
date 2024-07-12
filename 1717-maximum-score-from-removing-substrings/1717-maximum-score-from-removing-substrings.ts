function maximumGain(s: string, x: number, y: number): number {
    let n = s.length
    const biggerPriceMask = x > y ? /ab/gi : /ba/gi
    const smallerPriceMask = x > y ? /ba/gi : /ab/gi
    let res = 0

    let filtered = s.replaceAll(biggerPriceMask, '')
    while (filtered.length < s.length) {
        s = filtered
        filtered = s.replaceAll(biggerPriceMask, '')
    }
    res += x > y ? x * ((n - filtered.length) / 2) : y * ((n - filtered.length) / 2)
    n = filtered.length

    filtered = s.replaceAll(smallerPriceMask, '')
    while (filtered.length < s.length) {
        s = filtered
        filtered = s.replaceAll(smallerPriceMask, '')
    }
    res += x > y ? y * ((n - filtered.length) / 2) : x * ((n - filtered.length) / 2)

    return res
};
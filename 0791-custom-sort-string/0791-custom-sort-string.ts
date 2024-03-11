function customSortString(order: string, s: string): string {
    const wordWeight: number[] = []

    for (let i = 0; i < 26; i++) {
        wordWeight[i] = 0
    }

    let currIdx = 1
    for (let i = order.length-1; i >= 0 ; i--) {
        const rightIdx = order.charCodeAt(i) - 97
        wordWeight[rightIdx] += currIdx
        currIdx += 1
    }

    const res = s.split('')
    res.sort((a, b) => {
        const idxOfA = a.charCodeAt(0) - 97
        const idxOfB = b.charCodeAt(0) - 97

        return wordWeight[idxOfB] - wordWeight[idxOfA]
    })

    return res.join('')
};
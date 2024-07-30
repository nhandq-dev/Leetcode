function minimumDeletions(s: string): number {
    const aSpace: number[] = s.at(0) === 'a' ? [] : [0]
    const bSpace: number[] = []
    let countA = 0, countB = 0
    let totalA = 0, totalB = 0

    for (let i = 0; i < s.length; i++) {
        if (s.at(i) === 'a') {
            if (countB !== 0) {
                bSpace.push(countB)
                totalB += countB
                countB = 0
            }
            countA++
        } else {
            if (countA !== 0) {
                aSpace.push(countA)
                totalA += countA
                countA = 0
            }
            countB++
        }
    }
    if (countB !== 0) {
        bSpace.push(countB)
        totalB += countB
        countB = 0
    } else if (countA !== 0) {
        aSpace.push(countA)
        totalA += countA
        countA = 0
    }

    let res = Math.min(totalA - aSpace[0], totalB)
    let currSum = aSpace[0]
    for (let i = 1; i < aSpace.length; i++) {
        if (bSpace[i - 1] === undefined) break
        currSum += aSpace[i] - bSpace[i - 1]
        res = Math.min(res, totalA - currSum)
    }

    return res
};

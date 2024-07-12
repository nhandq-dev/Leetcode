function minimize(s: string): string {
    let res = []

    for (let i = 0; i < s.length - 1; i++) {
        let checker = false
        let subStr = s.at(i)

        if (s.at(i) === 'a') {
            for (let j = i + 1; j < s.length; j++, i++) {
                if (s.at(j) === 'b') checker = true
                if (s.charCodeAt(j) > 98) break
                subStr += s.at(j)
            }

            if (checker) {
                res.push(subStr)
            }
        } else if (s.at(i) === 'b') {
            for (let j = i + 1; j < s.length; j++, i++) {
                if (s.at(j) === 'a') checker = true
                if (s.charCodeAt(j) > 98) break
                subStr += s.at(j)
            }

            if (checker) {
                res.push(subStr)
            }
        }
    }

    return res.join('o')
}

function removingSubFromS(s: string, match: string) {
    const w1 = match.at(0), w2 = match.at(1)
    let res = ''
    let stackCount = 0

    for (let i = 0; i < s.length; i++) {
        res += s.at(i)

        if (s.at(i) === w1) {
            stackCount++
        } else if (s.at(i) === w2 && stackCount > 0) {
            stackCount--
            res = res.substring(0, res.length - 2)
        } else {
            stackCount = 0
        }
    }

    return res
}

function maximumGain(s: string, x: number, y: number): number {
    // s = minimize(s)
    let n = s.length
    let res = 0

    if (x > y) {
        s = removingSubFromS(s, 'ab')
        res = ((n - s.length) / 2) * x
        n = s.length
        s = removingSubFromS(s, 'ba')
        return res + ((n - s.length) / 2) * y
    }

    s = removingSubFromS(s, 'ba')
    res = ((n - s.length) / 2) * y
    n = s.length
    s = removingSubFromS(s, 'ab')
    return res + ((n - s.length) / 2) * x
};
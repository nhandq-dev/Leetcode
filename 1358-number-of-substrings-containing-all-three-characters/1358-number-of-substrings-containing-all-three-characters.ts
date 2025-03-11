function numberOfSubstrings(s: string): number {
    const letterMap: Map<string, number> = new Map()
    letterMap.set('a', 1)

    let res = 0
    let runner1 = 0, runner2 = 1
    let tracker = decodeLetter(s.charAt(0)) ^ decodeLetter(s.charAt(1))

    while () {
        while (tracker !== 7) {
            runner2 += 1
            tracker ^= decodeLetter()
        }
    }

    // find start point of windows
    for (let i = 0; i < s.length; i++) {
        const currentBitMap = decodeLetter(s.charAt(i))
        if (currentBitMap === 0 || (currentBitMap & windows) === currentBitMap) {
            continue
        }
        windows ^= currentBitMap
        letterStack.push(i)

        if (windows === 7) {
            const firstLetter = letterStack.shift()
            if (res === 0) {
                res += firstLetter
            }
            res += s.length - i
            windows ^= decodeLetter(s.charAt(firstLetter))
        }
    }

    return res
};
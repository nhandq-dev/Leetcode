function minimumLength(s: string): number {
    const sAsArr: string[] = s.split('')
    let l = 0
    let r = s.length - 1

    while (l < r && sAsArr[l] === sAsArr[r]) {
        const commonChar = sAsArr[r]
        while (sAsArr[l] === commonChar) {
            sAsArr.shift()
            r -= 1
        }

        while (commonChar === sAsArr[r]) {
            sAsArr.pop()
            r -= 1
        }
    }

    return sAsArr.length
};
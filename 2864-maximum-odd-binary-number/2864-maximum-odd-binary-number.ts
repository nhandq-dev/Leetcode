function maximumOddBinaryNumber(s: string): string {
    const sAsArr = s.split('')
    let prefix = ''
    let i = sAsArr.length - 1

    while (i >= 0) {
        if (sAsArr[i] === '1') {
            sAsArr.splice(i, 1)
            sAsArr.push('1')
            let j = i - 1

            while (j >= 0) {
                if (sAsArr[j] === '1') {
                    sAsArr.splice(j, 1)
                    prefix += '1'
                }
                j--
            }

            break
        }
        i--
    }

    return prefix + sAsArr.join('')
};
function maxDiff(num: number): number {
    let firstNum = num.toString(), secondNum = num.toString()
    const n = firstNum.length

    let i = 0
    while (firstNum.charAt(i) === '9' && i < n - 1) i++
    firstNum = firstNum.replaceAll(firstNum.charAt(i), '9')


    i = 1
    if (secondNum.charAt(0) !== '1') {
        secondNum = secondNum.replaceAll(secondNum.charAt(0), '1')
    } else {
        while ((secondNum.charAt(i) === '0' || secondNum.charAt(i) === secondNum.charAt(0)) && i < n) i++
        secondNum = i === n ? secondNum : secondNum.replaceAll(secondNum.charAt(i), '0')
    }

    return parseInt(firstNum) - parseInt(secondNum)
};
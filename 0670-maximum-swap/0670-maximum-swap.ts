function maximumSwap(num: number): number {
    const numAsArray: string[] = num.toString().split('')
    const n = numAsArray.length
    const prefixMax: number[] = [parseInt(numAsArray[n - 1])]

    for (let i = numAsArray.length - 2; i >= 0; i--) {
        prefixMax.push(Math.max(
            prefixMax[prefixMax.length - 1],
            parseInt(numAsArray[i])
        ))
    }
    prefixMax.reverse()
    console.log(prefixMax)

    for (let i = 0; i < numAsArray.length; i++) {
        if (parseInt(numAsArray[i]) < prefixMax[i]) {
            const farestIdx = numAsArray.findLastIndex(e => e === prefixMax[i].toString())
            const temp = numAsArray[i]
            numAsArray[i] = numAsArray[farestIdx]
            numAsArray[farestIdx] = temp
            // [numAsArray[i], numAsArray[farestIdx]] = [numAsArray[farestIdx], numAsArray[i]]
            break
        }
    }

    return parseInt(numAsArray.join(''))
};
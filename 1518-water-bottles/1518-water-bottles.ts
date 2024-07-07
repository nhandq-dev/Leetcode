function numWaterBottles(numBottles: number, numExchange: number): number {
    let res = numBottles
    while (numBottles >= numExchange) {
        const newNum = Math.floor(numBottles / numExchange)
        res += newNum
        numBottles = newNum + numBottles % numExchange
    }

    return res
};
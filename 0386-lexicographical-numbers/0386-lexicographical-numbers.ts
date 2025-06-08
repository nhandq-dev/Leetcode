function lexicalOrder(n: number): number[] {
    const res = []
    const l = n.toString().length

    const recusive = (num: number) => {
        if (num > n) return
        const lengthOfNum = num.toString().length
        const step: number = Math.pow(10, l - lengthOfNum)
        const loopTime = num === 1 ? 9 : 10

        for (let i = 1; i <= loopTime; i++) {
            res.push(num)

            if (step === 1) {
                if (num >= n) return
            } else {
                recusive(num * 10)
            }
            num += 1
        }
    }
    recusive(1)

    return res
};

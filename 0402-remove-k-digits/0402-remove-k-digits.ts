function removeKdigits(num: string, k: number): string {
    // let res = Number.POSITIVE_INFINITY

    // const dp = (str: string, removingCount: number) => {
    //     if (removingCount === 0) {
    //         res = isNaN(parseInt(str)) ? 0 : Math.min(res, parseInt(str))
    //     }

    //     for (let i=0; i< str.length; i++) {
    //         dp(`${str.slice(0, i)}${str.slice(i+1)}`, removingCount-1)
    //     }
    // }
    // dp(num, k)

    // return res.toString()


    // increcing monolothic stack
    const stack: number[] = []
    for (let i=0; i<num.length; i++) {
        const number = parseInt(num[i])

        while (stack.length !== 0 && parseInt(num[stack[stack.length-1]]) > number) {
            const candidateIdx = stack.pop()

            num = num.slice(0, candidateIdx) + num.slice(candidateIdx+1)
            i--
            k--
            if (k === 0) break
        }
        if (k === 0) break


        stack.push(i)
    }
    while (k !== 0) {
        num = num.slice(0, -1)
        k--
    }

    while (num[0] === '0') {
        num = num.slice(1)
    }

    return num === '' ? '0' : num
};

/**
123456789


1432219 k=3

132219 k=2 -remove 4

12349 k=1 -remove 3




 */

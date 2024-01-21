function removeKdigits(num: string, k: number): string {
    const stack: number[] = []
    for (let i = 0; i < num.length; i++) {
        const number = parseInt(num[i])

        while (stack.length !== 0 && parseInt(num[stack[stack.length - 1]]) > number && k !== 0) {
            const candidateIdx = stack.pop()

            num = num.slice(0, candidateIdx) + num.slice(candidateIdx + 1)
            i--
            k--
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

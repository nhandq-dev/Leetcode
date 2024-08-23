function fractionAddition(expression: string): string {
    const head: number[] = []
    const tail: number[] = []
    const operations: string[] = []

    let i = 0
    let isHead = true

    if (expression.charAt(0) === '-') {
        i++
    }

    while (i < expression.length) {
        switch (expression.charAt(i)) {
            case '-':
                isHead = true
                operations.push('-');
                i++
                break
            case '+':
                isHead = true
                operations.push('+');
                i++
                break
            case '/':
                isHead = false
                i++
                break;
            default:
                let currNum = ''
                while (!isNaN(parseInt(expression.charAt(i)))) {
                    currNum += expression.charAt(i)
                    i++
                }

                if (isHead) {
                    head.push(parseInt(currNum))
                } else {
                    tail.push(parseInt(currNum))
                }
                break
        }
    }
    if (expression.charAt(0) === '-') {
        head[0] = -head[0]
    }

    const commonTailSCM = smallestCommonMultiple(tail)
    let totalHead = head[0] * (commonTailSCM / tail[0])

    for (let i = 0; i < operations.length; i++) {
        totalHead = operations[i] === '-' ?
            totalHead - head[i + 1] * (commonTailSCM / tail[i + 1]) :
            totalHead + head[i + 1] * (commonTailSCM / tail[i + 1])
    }
    const finalGCD = Math.abs(gcd(totalHead, commonTailSCM));

    return totalHead === 0 ? '0/1' : `${totalHead / finalGCD}/${commonTailSCM / finalGCD}`
};

function gcd(a: number, b: number): number {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a: number, b: number): number {
    return (a * b) / gcd(a, b);
}

function smallestCommonMultiple(arr: number[]): number {
    return arr.reduce((multiple, num) => lcm(multiple, num));
}
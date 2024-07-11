function reverseParentheses(s: string): string {
    let latedIdx = 0

    const travelling = (goingFrom: number, isMovingForward = true): string => {
        if (goingFrom === s.length) return ''
        let runner = goingFrom
        let res = ''

        while (runner < s.length) {
            if (s.at(runner) === ')') {
                latedIdx = runner
                return res
            }

            if (s.at(runner) === '(') {
                runner += 1
                const subStr = travelling(runner, !isMovingForward)
                res = isMovingForward ? `${res}${subStr}` : `${subStr}${res}`

                runner = latedIdx+1
                continue
            }

            res = isMovingForward ? `${res}${s.at(runner)}` : `${s.at(runner)}${res}`
            runner++
        }

        return res
    }

    return travelling(0)
};
function removeInvalidParentheses(s: string): string[] {
    let preProcessFlag = true
    let tempStack = ''
    while (preProcessFlag) {
        if (s.length === 0 || s[0] === '(') break
        if (s[0] !== ')') {
            tempStack += s[0]
        }
        s = s.slice(1)
    }
    s = `${tempStack}${s}`

    preProcessFlag = true
    tempStack = ''
    while (preProcessFlag) {
        if (s.length === 0 || s[s.length - 1] === ')') break
        if (s[s.length - 1] !== '(') {
            tempStack = s[s.length - 1] + tempStack
        }
        s = s.slice(0, s.length - 1)
    }
    s = `${s}${tempStack}`

    const res: Set<string> = new Set()
    const memos: Map<string, boolean> = new Map()

    const isStringValid = (str: string): boolean => {
        if (!memos.has(str)) {
            if (str.length === 0 || str[0] === ')') return false
            const stack: string[] = []

            for (let i = 0; i < str.length; i++) {
                if (str[i] === ')') {
                    while (stack.length !== 0 && stack[stack.length - 1] !== '(') {
                        stack.pop()
                    }

                    if (stack.length === 0) {
                        memos.set(str, false)
                        return memos.get(str)
                    }
                    stack.pop()
                } else {
                    stack.push(str[i])
                }
            }

            memos.set(str, !stack.some((item: string) => item === '('))
        }

        return memos.get(str)
    }

    if (isStringValid(s)) return [s]

    let maxLength = 0;
    const dp = (str: string) => {
        const stack: Set<string> = new Set()
        let foundValidStr = false

        for (let i = 0; i < str.length; i++) {
            if (str[i] !== '(' && str[i] !== ')') continue
            const candidate = `${str.slice(0, i)}${str.slice(i + 1)}`

            if (isStringValid(candidate)) {
                foundValidStr = true
                maxLength = Math.max(maxLength, candidate.length)
                res.add(candidate)
            }
            stack.add(candidate)
        }

        if (!foundValidStr && str.length - 1 > maxLength) {
            stack.forEach((candidate) => {
                dp(candidate)
            })
        }

    }
    dp(s)

    return res.size === 0 ? [''] : Array.from(res).filter((item) => item.length === maxLength)
};
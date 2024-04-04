function maxDepth(s: string): number {
    let res = 0
    let tracker = 0
    let runner = 0

    while (s[runner] !== undefined) {
        if (s[runner] === '(') {
            tracker += 1
            res = Math.max(res, tracker)
        }
        if (s[runner] === ')') {
            tracker -= 1
        }

        runner += 1
    }

    return res
};
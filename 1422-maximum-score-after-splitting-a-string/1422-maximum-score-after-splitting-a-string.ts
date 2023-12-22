function maxScore(s: string): number {
    let left = 0
    let right = s.split('').reduce((carry, item) => carry + parseInt(item), 0)
    let res = 0

    for (let i = 0; i < s.length-1; i++) {
        if (s[i] === '0') {
            left += 1
        } else {
            right -= 1
        }
        res = Math.max(left + right, res)
    }

    return res
};
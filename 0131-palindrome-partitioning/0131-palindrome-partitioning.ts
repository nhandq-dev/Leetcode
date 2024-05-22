function partition(s: string): string[][] {
    const isPalindrome = _.memoize((str: string): boolean => {
        if (str.length === 0) return false
        const mid = Math.floor(str.length / 2)

        return str.length % 2 === 0 ?
            str.substring(0, mid) === str.substring(mid).split('').reverse().join('') :
            str.substring(0, mid) === str.substring(mid + 1).split('').reverse().join('')
    })

    const backTracking = _.memoize((idx: number): string[][] => {
        if (s[idx] === undefined) return []

        let palindromeStr = ''
        let res: string[][] = []

        for (let i = idx; i < s.length; i++) {
            palindromeStr = `${palindromeStr}${s[i]}`

            if (!isPalindrome(palindromeStr)) {
                continue
            }

            if (i === s.length - 1) {
                res.push([palindromeStr])
            }
            const nextPathRes = backTracking(i + 1)

            if (nextPathRes.length) {
                nextPathRes.map((item: string[]) => {
                    res.push([palindromeStr, ...item])
                })
            }
        }

        return res
    })

    return backTracking(0)
};
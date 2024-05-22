function partition(s: string): string[][] {
    const isPalindrome = _.memoize((str: string): boolean => {
        if (str.length === 0) return false
        let l = 0, r = str.length - 1

        while (l < r) {
            if (str[l] !== str[r]) return false
            l++
            r--
        }

        return true
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
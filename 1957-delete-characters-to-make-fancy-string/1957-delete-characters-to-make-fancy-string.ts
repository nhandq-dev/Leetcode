function makeFancyString(s: string): string {
    let i = 0
    let res = ''

    while (i < s.length) {
        res += s.charAt(i)
        if (s.charAt(i) === s.charAt(i-1)) {
            while (s.charAt(i+1) === s.charAt(i)) i++
        }
        i++
    }

    return res
};
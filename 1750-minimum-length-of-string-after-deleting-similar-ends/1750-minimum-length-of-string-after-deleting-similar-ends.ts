function minimumLength(s: string): number {
    let l = 0
    let r = s.length - 1

    while (l < r && s[l] === s[r]) {
        const commonChar = s[r]
        while (s[l] === commonChar) {
            l += 1
        }

        while (commonChar === s[r]) {
            r -= 1
        }
    }

    return r < l ? 0 : r - l + 1
};
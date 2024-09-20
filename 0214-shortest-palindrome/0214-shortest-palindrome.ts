function shortestPalindrome(s: string): string {
    let missingPath = ''
    let spliter = s

    while (spliter.length > 1 && !isPalindrome(spliter)) {
        missingPath = `${missingPath}${spliter[spliter.length - 1]}`
        spliter = spliter.slice(0, spliter.length - 1)
    }

    return `${missingPath}${s}`
};

function isPalindrome(s: string): boolean {
    if (s.length <= 1) return true
    while (s.length && s[0] === s[s.length - 1]) {
        s = s.slice(1, s.length - 1)
    }

    return s.length <= 1
}
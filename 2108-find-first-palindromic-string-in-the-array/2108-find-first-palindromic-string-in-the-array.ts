function firstPalindrome(words: string[]): string {
    const isPalindromme = (s: string): boolean => {
        let left = 0, right = s.length - 1
        while (left < right) {
            if (s[left] !== s[right]) {
                return false
            }
            left++
            right--
        }

        return true
    }

    for (const w of words) {
        if (isPalindromme(w)) return w
    }

    return ''
};
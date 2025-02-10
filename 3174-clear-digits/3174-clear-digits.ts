function clearDigits(s: string): string {
    let i = 0
    while (s.length > 0 && s.charAt(i) !== '') {
        if (s.charCodeAt(i) < 97 || s.charCodeAt(i) > 122) {
            s = s.substring(0, i - 1) + s.slice(i + 1)
            i--
            continue
        }
        i++
    }

    return s
};
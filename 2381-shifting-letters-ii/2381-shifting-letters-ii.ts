function shiftingLetters(s: string, shifts: number[][]): string {
    const n = s.length
    const diffArr: number[] = Array.from({ length: n + 1 }, _ => 26)

    for (const [start, end, direction] of shifts) {
        diffArr[start] = (diffArr[start] + direction * 2 - 1) % 52  + 52
        diffArr[end + 1] = (diffArr[end + 1] - direction * 2 + 1) % 52 + 52
    }

    let carry = 0
    return s.split('').map((_, idx: number) => {
        carry += diffArr[idx]
        return String.fromCharCode(97 + (s.charCodeAt(idx) - 97 + carry - 26) % 26)
    }).join('')
};
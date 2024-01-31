function numDecodings(s: string): number {
    const memorize: Map<number, number> = new Map()
    let res = 0

    const traveling = function (idx: number): boolean {
        if (idx === 0) {
            if (s[0] === '0')
            return true
        }

        if (s[idx] === '1' || s[idx] === '2')
    }
    traveling(s.length-1)

    return res
};

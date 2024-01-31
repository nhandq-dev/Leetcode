function numDecodings(s: string): number {
    let res: number = 0;
    const memorize: Map<string, number> = new Map()

    const traveling = function (s: string): boolean {
        if (s[0] === '0') return false;
        if (s.length === 1) {
            res += 1;
            return true;
        }

        if (memorize.has(s)) {
            res += memorize.get(s)
            return true;
        }

        if (traveling(s.substring(1))) {
            memorize.set(s, res)
        }
        if (parseInt(s[0] + s[1]) < 27) {
            if (s.length === 2) {
                res += 1;
                memorize.set(s, res)
            } else if (s.length > 2 && traveling(s.substring(2))) {
                memorize.set(s, res)
            }
        }
        return true;
    }
    traveling(s);

    return res;
};

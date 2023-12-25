function numDecodings(s: string): number {
    let res: number = 0;
    const memorize: {[key in string]?: number} = {};

    const traveling = function (s: string): boolean {
        if (memorize[s]) {
            res += memorize[s];
            return true;
        }
        if (s[0] === '0') return false;
        if (s.length === 1) {
            res+=1;
            return true;
        }

        if (traveling(s.substring(1))) {
            memorize[s] = res;
        }
        if (parseInt(s[0]+s[1]) < 27) {
            if (s.length === 2) {
                res += 1;
                memorize[s] = res;
                return true;
            } else if (s.length > 2 && traveling(s.substring(2))) {
                memorize[s] = res;
            }
        }
        return true;
    }
    traveling(s);

    return res;
};

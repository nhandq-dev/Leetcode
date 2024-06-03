function appendCharacters(s: string, t: string): number {
    let maxPrefix: string = '';
    let tempPrefix: string = '';
    let tMatchIdx: number = 0;

    for (let i=0; i<s.length; i++) {
        if (s[i] === t[tMatchIdx]) {
            tempPrefix += s[i];
            if (tempPrefix.length > maxPrefix.length) {
                maxPrefix = tempPrefix;
            }
            tMatchIdx++;
        }
    }
    return t.length - maxPrefix.length;
};
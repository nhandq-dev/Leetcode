function minWindow(s: string, t: string): string {
    if (t.length > s.length) return '';
    if (t.length === 1) return s.indexOf(t) === -1 ? '' : t;
    if (s === t) return t;

    const matched: Map<string, number> = new Map(
        t.split('').map((char) => [char, 0])
    );
    const tAsMap: Map<string, number> = new Map(
        t.split('').reduce((pre, curr) => {
            pre.set(curr, pre.has(curr) ? pre.get(curr)! + 1 : 1);
            return pre;
        }, new Map<string, number>())
    );

    let i: number = 0;
    let j: number = t.length;

    for (let x = 0; x < t.length; x++) {
        const char = s.charAt(x);
        const currentValue = matched.get(char) || 0;
        matched.set(char, currentValue + 1);
    }

    let res: string = '';
    while (j - i >= t.length && j <= s.length) {
        if (![...matched.entries()].some(([char, count]) => count < (tAsMap.get(char) || 0))) {
            res = (res.length > s.slice(i, j).length || res.length === 0) ? s.slice(i, j) : res;

            const char = s.charAt(i);
            const currentValue = matched.get(char) || 0;
            matched.set(char, currentValue - 1);

            i += 1;
        } else {
            const char = s.charAt(j);
            const currentValue = matched.get(char) || 0;
            matched.set(char, currentValue + 1);

            j += 1;
        }
    }

    return res;
}

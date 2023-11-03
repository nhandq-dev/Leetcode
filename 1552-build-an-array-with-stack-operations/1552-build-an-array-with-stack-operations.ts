function buildArray(target: number[], n: number): string[] {
    const res: string[] = [];

    for (let i=1; i<=n; i++) {
        if (target.length === 0) break
        res.push('Push');

        if (i !== target[0]) {
            res.push('Pop')
        } else {
            target.shift()
        }
    }

    return res;
};
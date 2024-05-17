function convert(s: string, numRows: number): string {
    const res: string[][] = [];
    let direction: 1 | -1 = 1;
    let counting = 0;

    for (let i = 0; i < s.length; i++) {
        res[counting] = res[counting] ? [...res[counting], s[i]] : [s[i]];
        counting += direction;

        if (counting === 0) {
            direction = 1;
        } else if (counting === numRows - 1) direction = -1
    }

    return res.flat().join('');
};
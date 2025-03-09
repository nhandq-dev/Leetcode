function numberOfAlternatingGroups(colors: number[], k: number): number {
    colors = colors.concat(colors.slice(0, k - 1))
    let windowLastDigi = colors[0], windowSize = 1
    let res = 0

    for (let i = 1; i < colors.length; i++) {
        if (windowLastDigi === colors[i]) {
            windowSize = 0
        }

        windowLastDigi = colors[i]
        windowSize += 1
        if (windowSize === k) {
            windowSize -= 1
            res++
        }
    }

    return res
};
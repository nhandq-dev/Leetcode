function findContentChildren(g: number[], s: number[]): number {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)

    let res = 0
    let gRunner = 0
    let sRunner = 0

    while (gRunner !== g.length && sRunner !== s.length) {
        if (s[sRunner] >= g[gRunner]) {
            res += 1
            gRunner += 1
        }
        sRunner += 1
    }

    return res
};
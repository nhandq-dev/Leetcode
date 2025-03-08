function minimumRecolors(blocks: string, k: number): number {
    let runner = k
    let res = 0

    for (let i = 0; i < k; i++) {
        if (blocks.charAt(i) === 'W') res += 1
    }

    let candidate = res
    for (let i = k; i < blocks.length; i++) {
        if (blocks.charAt(i) === 'W') candidate += 1
        if (blocks.charAt(i - k) === 'W') candidate -= 1

        res = Math.min(res, candidate)
    }

    return res
};
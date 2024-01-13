function minSteps(s: string, t: string): number {
    const n = s.length
    const tFrequence: Map<string, number> = new Map()
    const sFrequence: Map<string, number> = new Map()
    let res = 0

    for (let i = 0; i < 24; i++) {
        // since 97 was the code of the first letter 'a'
        tFrequence.set(String.fromCharCode(i + 97), 0)
        sFrequence.set(String.fromCharCode(i + 97), 0)
    }

    for (let i = 0; i < n; i++) {
        tFrequence.set(t[i], (tFrequence.get(t[i]) || 0) + 1)
        sFrequence.set(s[i], (sFrequence.get(s[i]) || 0) + 1)
    }
    let sRunner = 97, tRunner = 97

    while (sRunner < 123 && tRunner < 123) {
        while (!sFrequence.get(String.fromCharCode(sRunner)) && sRunner < 123) {
            sRunner++
        }
        while (!tFrequence.get(String.fromCharCode(tRunner)) && tRunner < 123) {
            tRunner++
        }
        if (sRunner === 123 || tRunner === 123) break

        if (sRunner === tRunner) {
            res += Math.abs(sFrequence.get(String.fromCharCode(sRunner)) - tFrequence.get(String.fromCharCode(tRunner)))
            sRunner++
            tRunner++
        } else if (sRunner > tRunner) {
            res += tFrequence.get(String.fromCharCode(tRunner))
            tRunner++
        } else {
            res += sFrequence.get(String.fromCharCode(sRunner))
            sRunner++
        }
    }

    while (sRunner < 123) {
        res += sFrequence.get(String.fromCharCode(sRunner)) || 0
        sRunner++
    }
    while (tRunner < 123) {
        res += tFrequence.get(String.fromCharCode(tRunner)) || 0
        tRunner++
    }

    return res / 2
};

/**

s
{
    a: 24,
    b: 10,
    c: 11,
}

t
{
    a: 14,
    b: 15,
    c: 16,
}


{
    a: 24
    b: 5
    c: 5
}

 */

function getLucky(s: string, k: number): number {
    let digiofS = ''

    for (let i = 0; i < s.length; i++) {
        digiofS += s.charCodeAt(i) - 96
    }

    for (let i = 0; i < k; i++) {
        digiofS = digiofS.split('').reduce((c, n) => `${parseInt(c) + parseInt(n)}`, '0')
    }

    return parseInt(digiofS)
};
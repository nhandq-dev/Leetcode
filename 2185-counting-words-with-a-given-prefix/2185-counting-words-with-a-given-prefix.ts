function prefixCount(words: string[], pref: string): number {
    const n = pref.length
    return words.filter(w => w.slice(0, n) === pref).length
};
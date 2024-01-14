function closeStrings(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) return false;
    const mapWord1: Map<string, number> = new Map();
    const mapWord2: Map<string, number> = new Map();

    for (let i = 0; i < word1.length; i++) {
        mapWord1.set(word1[i], (mapWord1.get(word1[i]) || 0) + 1);
        mapWord2.set(word2[i], (mapWord2.get(word2[i]) || 0) + 1);
    }

    return JSON.stringify(Array.from(mapWord1.values()).sort()) === JSON.stringify(Array.from(mapWord2.values()).sort()) && JSON.stringify(Array.from(mapWord1.keys()).sort()) === JSON.stringify(Array.from(mapWord2.keys()).sort());
};

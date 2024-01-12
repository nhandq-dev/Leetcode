function halvesAreAlike(s: string): boolean {
    const mid: number = s.length / 2;
    let vowels1: number = 0;
    let vowels2: number = 0;
    const vowelsMap: Map<string, boolean> = new Map();
    vowelsMap.set('a', true);
    vowelsMap.set('e', true);
    vowelsMap.set('i', true);
    vowelsMap.set('o', true);
    vowelsMap.set('u', true);
    vowelsMap.set('A', true);
    vowelsMap.set('E', true);
    vowelsMap.set('I', true);
    vowelsMap.set('O', true);
    vowelsMap.set('U', true);

    for (let i = 0; i < mid; i++) {
        if (vowelsMap.has(s[i])) {
            vowels1++;
        }
        if (vowelsMap.has(s[i + mid])) {
            vowels2++;
        }
    }

    return vowels1 === vowels2;
};
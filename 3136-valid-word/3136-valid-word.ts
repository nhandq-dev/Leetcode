function isValid(word: string): boolean {
    return !(word.length < 3 || !/^[\w]+$/.test(word) || !/[a,e,o,u,i,A,E,O,U,I]+/.test(word) || !/[b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z]+/.test(word))
};
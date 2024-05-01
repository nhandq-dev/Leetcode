function reversePrefix(word: string, ch: string): string {
    const chIdx = word.indexOf(ch)
    if (chIdx === -1) return word
    
    return word.substring(0, chIdx+1).split('').reverse().join('') + word.substring(chIdx+1)
};
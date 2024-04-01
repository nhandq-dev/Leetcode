function lengthOfLastWord(s: string): number {
    s = s.trimEnd()
    return s.length - s.lastIndexOf(' ') - 1
};
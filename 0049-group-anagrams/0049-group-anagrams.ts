function groupAnagrams(strs: string[]): string[][] {
    const hash: {[key in string]: string[]} = {};

    for (const word of strs) {
        const sortedWord: string = word.split('').sort((a,b) => a.localeCompare(b)).join('');
        if (hash[sortedWord] === undefined) {
            hash[sortedWord] = [word];
        } else {
            hash[sortedWord].push(word)
        }
    }

    return Object.values(hash);
};
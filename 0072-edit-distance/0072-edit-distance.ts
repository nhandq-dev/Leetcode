function minDistance(word1: string, word2: string): number {
    if (word1 === word2) return 0
    if (word1.length < word2.length) return minDistance(word2, word1);
    const memos: Map<string, number> = new Map();

    const dp = (str1: string, str2: string) => {
        if (str1 === str2) return 0;
        if (str2 === '' || str1.includes(str2)) return str1.length - str2.length;
        if (str1 === '' || str2.includes(str1)) return str2.length - str1.length;

        if (!memos.has(`${str1}-${str2}`)) {
            if (str1[0] === str2[0]) {
               memos.set(`${str1}-${str2}`, dp(str1.slice(1), str2.slice(1))) 
            } else {
                memos.set(`${str1}-${str2}`, Math.min(
                    1 + dp(`${str2[0]}${str1}`, str2),
                    1 + dp(str1.slice(1), str2),
                    1 + dp(`${str2[0]}${str1.slice(1)}`, str2)
                ))
            }
        }

        return memos.get(`${str1}-${str2}`)
    }

    return dp(word1, word2);
};
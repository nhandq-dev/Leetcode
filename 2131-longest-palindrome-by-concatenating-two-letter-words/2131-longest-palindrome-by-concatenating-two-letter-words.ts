function longestPalindrome(words: string[]): number {
    const setOfWord: {[key in string]: number} = words.reduce((pre, curr, idx) => {
        if (pre[curr] === undefined) {
            pre[curr] = 0;
        }
        pre[curr]+=1;
        return pre;
    }, {} as {[key in string]: number});
    let res = 0;
    let maxOfPalindromeWord = 0;
    let memoOdd = 0;

    for (const word in setOfWord) {
        if (word[0] === word[1]) {
            memoOdd = Math.max(memoOdd, setOfWord[word]%2);
            maxOfPalindromeWord += setOfWord[word] - setOfWord[word]%2;
            setOfWord[word] = setOfWord[word]%2;
        } else if (setOfWord[`${word[1]}${word[0]}`]) {
            const min = Math.min(setOfWord[word], setOfWord[`${word[1]}${word[0]}`]);
            res += min*2;
            setOfWord[`${word[1]}${word[0]}`] -= min;
            setOfWord[word] -= min;
        }
    }
    
    return res*2 + maxOfPalindromeWord*2 + memoOdd*2;
};
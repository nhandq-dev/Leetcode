function wordBreak(s: string, wordDict: string[]): boolean {
    const dic: Set<string> = new Set(wordDict);
    const memos: Map<string, boolean> = new Map();

    const dp = (idx: number, prefix: string): boolean => {
        if (s[idx] === undefined) {
            return prefix.length === 0
        }

        if (!memos.has(`${prefix}-${idx}`)) {
            if (dic.has(`${prefix}${s[idx]}`) && dp(idx+1, '')) {
                memos.set(`${prefix}-${idx}`, true)
            } else {
                memos.set(`${prefix}-${idx}`, dp(idx+1, `${prefix}${s[idx]}`))
            }
        }

        return memos.get(`${prefix}-${idx}`)
    }

    return dp(0, '');
};

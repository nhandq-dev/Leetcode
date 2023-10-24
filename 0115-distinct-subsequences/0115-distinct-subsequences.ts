function numDistinct(s: string, t: string): number {
    if (s.length < t.length || (s.length === t.length && s !== t)) return 0;
    const memos: Map<string, number> = new Map();

    const dp = (str1: string, str2: string) => {
        if (str1 === str2 || str2.length === 0) {
            return 1;
        }
        if (str1.length < str2.length) return 0;
        if (str1.length === str2.length && str1 !== str2) return 0;

        if (!memos.has(`${str1}-${str2}`)) {
            if (str1[0] === str2[0]) {
                memos.set(`${str1}-${str2}`, dp(str1.slice(1), str2.slice(1)) + dp(str1.slice(1), str2))
            } else {
                memos.set(`${str1}-${str2}`, dp(str1.slice(1), str2))
            }
        }

        return memos.get(`${str1}-${str2}`)
    }

    // const res = dp(s, t);
    // console.log(memos)
    return dp(s, t)
};
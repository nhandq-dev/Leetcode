function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const memos: Map<string, number> = new Map();

    for (let i=0; i<s.length; i++) {
        if (!memos.has(s[i])) {
            memos.set(s[i], 0)
        }
        memos.set(s[i], memos.get(s[i]) + 1)
    }

    for (let i=0; i<t.length; i++) {
        if (!memos.has(t[i])) return false;

        if (memos.get(t[i]) === 1) {
            memos.delete(t[i]);
        } else {
            memos.set(t[i], memos.get(t[i]) - 1)
        }
    }

    return true;
};
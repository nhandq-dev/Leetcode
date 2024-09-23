function minExtraChar(s: string, dictionary: string[]): number {
    const memos: Map<string, number> = new Map()

    const dp = (idx: number, str: string): number => {
        if (dictionary[idx] === undefined) return str.length

        if (!memos.has(`${idx}-${str}`)) {
            const subStrIdx = str.search(dictionary[idx]);

            if (subStrIdx !== -1) {
                memos.set(`${idx}-${str}`, Math.min(
                    dp(idx, str.slice(0, subStrIdx)) + dp(idx, str.slice(subStrIdx + dictionary[idx].length)),
                    dp(idx+1, str.slice(0, subStrIdx)) + dp(idx+1, str.slice(subStrIdx + dictionary[idx].length)),
                    dp(idx+1, str),
                    dp(0, str.slice(0, subStrIdx)) + dp(0, str.slice(subStrIdx + dictionary[idx].length))
                ))
            } else {
                memos.set(`${idx}-${str}`, dp(idx+1, str))
            }
        }

        return memos.get(`${idx}-${str}`)
    }

    return dp(0, s)
};
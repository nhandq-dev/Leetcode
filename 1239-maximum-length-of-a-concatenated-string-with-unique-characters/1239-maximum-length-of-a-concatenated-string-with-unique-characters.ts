function maxLength(arr: string[]): number {
    const encodeStr = (str: string): number => {
        let binaryStr: string = '00000000000000000000000000'

        for (let i = 0; i < str.length; i++) {
            const currChar = str.charCodeAt(i) - 97
            if (binaryStr[currChar] === '1') return 0

            binaryStr = binaryStr.slice(0, currChar) + '1' + binaryStr.slice(currChar + 1)
        }

        return parseInt(binaryStr, 2)
    }

    const encodedArr: number[] = []
    const filteredArr: string[] = []

    for (const item of arr) {
        const encodedItem = encodeStr(item)

        if (encodedItem !== 0) {
            encodedArr.push(encodedItem)
            filteredArr.push(item)
        }
    }

    const memos: Map<string, number> = new Map()
    const dp = (idx: number, prefix: number): number => {
        if (filteredArr[idx] === undefined) return 0

        if (!memos.has(`${idx},${prefix}`)) {
            if ((prefix ^ encodedArr[idx]) === (prefix | encodedArr[idx])) {
                memos.set(`${idx},${prefix}`, Math.max(
                    filteredArr[idx].length + dp(idx + 1, prefix | encodedArr[idx]),
                    dp(idx + 1, prefix)
                ))
            } else {
                memos.set(`${idx},${prefix}`, dp(idx + 1, prefix))
            }
        }

        return memos.get(`${idx},${prefix}`)
    }

    return dp(0, 0)
};

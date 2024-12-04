function canMakeSubsequence(str1: string, str2: string): boolean {
    let runner1 = 0, runner2 = 0
    let matched = ''

    while (runner1 < str1.length && runner2 < str2.length) {
        if (str1.charAt(runner1) === str2.charAt(runner2)) {
            matched += str2.charAt(runner2)
            runner1++
            runner2++
            continue
        }

        const nextCharCode = str1.charCodeAt(runner1) === 'z'.charCodeAt(0) ? 'a'.charCodeAt(0) : str1.charCodeAt(runner1) + 1
        if (nextCharCode === str2.charCodeAt(runner2)) {
            matched += str2.charAt(runner2)
            runner1++
            runner2++
            continue
        }

        runner1++
    }

    return matched === str2
};
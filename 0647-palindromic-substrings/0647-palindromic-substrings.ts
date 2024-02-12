function countSubstrings(s: string): number {
    let res = s.length

    for (let left = 0; left < s.length; left++) {
        let runner = 1
        if (s[left + 1] === s[left]) {
            res += 1
            let right = left + 1

            while (s[left - runner] !== undefined && s[left - runner] === s[right + runner]) {
                res += 1
                runner += 1
            }
        }
        runner = 1

        while (s[left - runner] && s[left + runner] && s[left - runner] === s[left + runner]) {
            res += 1
            runner += 1
        }
    }
    return res
};
function countSubstrings(s: string): number {
    let res = s.length

    for (let left = 0; left < s.length; left++) {
        let runner = 1
        if (s[left + 1] === s[left]) {
            res += 1
            let right = left+1

            while (s[left-runner] !== undefined && s[left-runner] === s[right+runner]) {
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
/**
12345
aaaaa

1
2
3
4
5
12
23
123
34
234
12345
45
345

2345
1234

 */
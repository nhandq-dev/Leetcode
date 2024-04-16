function reverseVowels(s: string): string {
    if (s.length === 1) return s;
    let res: string[] = [];
    let vowelsMap: {[key in string]: boolean} = {
        'a': true,
        'e': true,
        'o': true,
        'u': true,
        'i': true,
        'A': true,
        'E': true,
        'O': true,
        'U': true,
        'I': true,
    }
    let i=0;
    let j=s.length-1;

    while (i<=j) {
        res[i] = s[i];
        res[j] = s[j];
        if (vowelsMap[s[i]]) {
            while (i<j) {
                res[j] = s[j];
                if (vowelsMap[s[j]]) {
                    res[i] = s[j];
                    res[j] = s[i];
                    j--;
                    break;
                }
                j--;
            }
        }
        i++;
    }
    console.log(res)

    return res.join('');
};
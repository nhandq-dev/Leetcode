function checkInclusion(s1: string, s2: string): boolean {
    if (s2.length < s1.length) return false;
    if (s1.length === 1) return s2.indexOf(s1) !== -1;
    const hashOfS1: {[key in string]: number} = getHashOfSringFrequence(s1);

    for (let i: number = 0; i !== s2.length - s1.length + 1; i++) {
        const cloneHast = Object.assign({}, hashOfS1);
        for (let j=0; j<s1.length; j++) {
            if (cloneHast[s2.charAt(i+j)]) {
                if (j === s1.length - 1) return true
                cloneHast[s2.charAt(i+j)] -= 1;
            } else {
                break;
            }
        }
    }
    
    return false;
};

function getHashOfSringFrequence(s: string): {[key in string]: number} {
    let res: {[key in string]: number} = {}
    for (let i=0; i<s.length; i++) {
        if (res[s.charAt(i)] === undefined) res[s.charAt(i)] = 0;
        res[s.charAt(i)] += 1;
    }

    return res;
}

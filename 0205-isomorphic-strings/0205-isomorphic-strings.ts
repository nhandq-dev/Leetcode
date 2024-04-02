function isIsomorphic(s: string, t: string): boolean {
    const mapp: {[key in string]?: string} = {};
    const addedMap: string[] = [];

    for(let i:number=0; i<s.length; i++) {
        if(mapp[s[i]] === undefined) {
            if (addedMap.indexOf(t[i]) !== -1) return false;
            mapp[s[i]] = t[i];
            addedMap.push(t[i]);
        } else if (mapp[s[i]] !== t[i] ) {
            return false;
        }
    }
    
    return true
};
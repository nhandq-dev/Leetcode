function romanToInt(s: string): number {
    const romanLetterMap: Map<string, number> = new Map()
    romanLetterMap.set('I', 1)
    romanLetterMap.set('V', 5)
    romanLetterMap.set('X', 10)
    romanLetterMap.set('IV', 4)
    romanLetterMap.set('IX', 9)
    romanLetterMap.set('L', 50)
    romanLetterMap.set('C', 100)
    romanLetterMap.set('XL', 40)
    romanLetterMap.set('XC', 90)
    romanLetterMap.set('D', 500)
    romanLetterMap.set('M', 1000)
    romanLetterMap.set('CD', 400)
    romanLetterMap.set('CM', 900)

    let res = 0
    const sAsArray = s.split('')
    let candidate = ''

    while (sAsArray.length !== 0) {
        const letter = sAsArray.shift()

        if (romanLetterMap.has(`${candidate}${letter}`)) {
            candidate += letter
        } else {
            console.log(candidate)
            res += romanLetterMap.get(candidate) || 0
            candidate = letter
        }
    }
    res += romanLetterMap.get(candidate) || 0

    return res
};

// IVXLCDM
// 

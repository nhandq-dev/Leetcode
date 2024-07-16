function countOfAtoms(formula: string): string {
    let i = 0
    const parseFomular = (): Map<string, number> => {
        const res: Map<string, number> = new Map()
        let currAtom = ''
        let currCount = ''

        while (i < formula.length) {
            // if uppercase
            if (formula.charCodeAt(i) > 64 && formula.charCodeAt(i) < 91) {
                if (currAtom !== '') {
                    res.set(currAtom, (res.get(currAtom) || 0) + parseInt(currCount || '1'))
                }

                currAtom = formula.at(i)
                currCount = ''
                i++
            } else if (formula.charCodeAt(i) > 96 && formula.charCodeAt(i) < 123) {
                currAtom += formula.at(i)
                i++
            } else if (formula.charCodeAt(i) > 47 && formula.charCodeAt(i) < 58) {
                currCount = `${currCount}${parseInt(formula.at(i))}`
                i++
            } else if (formula.at(i) === '(') {
                if (currAtom !== '') {
                    res.set(currAtom, (res.get(currAtom) || 0) + parseInt(currCount || '1'))
                    currAtom = ''
                    currCount = ''
                }

                i++
                const childMap: Map<string, number> = parseFomular()
                childMap.forEach((count: number, atom: string) => {
                    res.set(atom, (res.get(atom) || 0) + count)
                })
            } else {
                i++
                if (currAtom !== '') {
                    res.set(currAtom, (res.get(currAtom) || 0) + parseInt(currCount || '1'))
                }

                let multiplier = ''
                while (i < formula.length && formula.charCodeAt(i) > 47 && formula.charCodeAt(i) < 58) {
                    multiplier += formula.at(i)
                    i++
                }

                if (multiplier !== '') {
                    res.forEach((count: number, atom: string) => {
                        res.set(atom, res.get(atom) * parseInt(multiplier))
                    })
                }

                return res
            }
        }

        if (currAtom !== '') {
            res.set(currAtom, (res.get(currAtom) || 0) + parseInt(currCount || '1'))
        }

        return res
    }

    const parsed: Map<string, number> = parseFomular()
    const atomArr = Array.from(parsed.entries())
    atomArr.sort(([atom1, __], [atom2, _]) => atom1.localeCompare(atom2))

    return atomArr.reduce((curr, [atom, count]) => count > 1 ? `${curr}${atom}${count}` : `${curr}${atom}`, '')
};


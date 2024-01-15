

function findWinners(matches: number[][]): number[][] {
    const setOfLoser: Set<number> = new Set()
    const setOfWinnerNeverLost: Set<number> = new Set()
    const setOfWinnerLostExactOne: Set<number> = new Set()

    for (const match of matches) {
        setOfWinnerNeverLost.add(match[0])
    }


    for (const match of matches) {
        setOfWinnerNeverLost.delete(match[1])
        setOfWinnerLostExactOne.add(match[1])

        if (setOfLoser.has(match[1])) {
            setOfWinnerLostExactOne.delete(match[1])
        }

        setOfLoser.add(match[1])

    }

    return [Array.from(setOfWinnerNeverLost).sort((a,b) => a-b), Array.from(setOfWinnerLostExactOne).sort((a,b) => a-b)]
};
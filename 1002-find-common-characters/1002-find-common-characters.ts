function commonChars(words: string[]): string[] {
    if (words.length === 0) return []
    let windown: Map<string, number> = new Map()

    // init the windown
    for (let i = 0; i < words[0].length; i++) {
        windown.set(words[0].at(i), (windown.get(words[0].at(i)) || 0) + 1)
    }

    for (let i = 1; i < words.length; i++) {
        const newWindow: Map<string, number> = new Map()

        for (let j = 0; j < words[i].length; j++) {
            if (windown.get(words[i].at(j))) {
                newWindow.set(words[i].at(j), (newWindow.get(words[i].at(j)) || 0) + 1)
                windown.set(words[i].at(j), windown.get(words[i].at(j)) - 1)
            }
        }

        windown = newWindow
    }

    const res: string[] = []
    windown.forEach((freq: number, char: string) => {
        for (let i = 0; i < freq; i++) res.push(char)
    })

    return res
};
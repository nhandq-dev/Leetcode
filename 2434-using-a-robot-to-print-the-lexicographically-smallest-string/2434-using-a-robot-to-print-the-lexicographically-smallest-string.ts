function robotWithString(s: string): string {
    const sAsArray: number[] = []
    const minAtIdx: number[] = []
    let currMin = 26

    for (let i = s.length - 1; i >= 0; i--) {
        sAsArray.push(s.charCodeAt(i) - 97)

        if (s.charCodeAt(i) - 97 < currMin) {
            currMin = s.charCodeAt(i) - 97
        }
        minAtIdx.push(currMin)
    }

    let answer = ''
    let t: number[] = []

    for (let i = sAsArray.length - 1; i >= 0; i--) {
        const currentLetterCode = sAsArray[i]
        t.push(currentLetterCode)

        while (minAtIdx[i - 1] !== undefined && t.length > 0 && t[t.length - 1] <= minAtIdx[i - 1]) {
            answer += String.fromCharCode(t[t.length - 1] + 97)
            t.pop()
        }
    }

    while (t.length > 0) {
        answer += String.fromCharCode(t.pop() + 97)
    }

    return answer
};

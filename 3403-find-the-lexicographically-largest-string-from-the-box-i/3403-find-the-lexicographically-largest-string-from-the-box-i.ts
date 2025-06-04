function answerString(word: string, numFriends: number): string {
    if (numFriends === 1) return word
    let answer = ''

    for (let i = 0; i < word.length; i++) {
        const candidate = word.slice(i, Math.min(word.length, i + word.length - numFriends + 1))
        if (candidate > answer) answer = candidate
    }

    return answer
};
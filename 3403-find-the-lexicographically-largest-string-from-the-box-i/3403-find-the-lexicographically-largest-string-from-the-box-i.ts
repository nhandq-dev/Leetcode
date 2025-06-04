function answerString(word: string, numFriends: number): string {
    if (numFriends === 1) return word
    let answer = ''

    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) >= answer.charAt(0) && word.slice(i, Math.min(word.length, i + word.length - numFriends + 1)) > answer)
            answer = word.slice(i, Math.min(word.length, i + word.length - numFriends + 1))
    }

    return answer
};
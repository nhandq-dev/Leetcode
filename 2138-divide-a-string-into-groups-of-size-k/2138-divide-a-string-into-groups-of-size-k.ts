function divideString(s: string, k: number, fill: string): string[] {
    s = s.padEnd(Math.ceil(s.length / 3) * 3, fill)
    const answer: string[] = []

    for (let i = 0; i < s.length; i += 3) {
        answer.push(s.slice(i, i + 3))
    }

    return answer
};
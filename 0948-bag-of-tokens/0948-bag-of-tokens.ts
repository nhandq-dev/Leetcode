function bagOfTokensScore(tokens: number[], power: number): number {
    if (tokens.length === 1) return power > tokens[0] ? 1 : 0
    const sortedTokens = tokens.sort((a, b) => a - b)
    let score = 0

    let l = 0
    let r = sortedTokens.length - 1

    while (l < r) {
        // take right
        if (power < sortedTokens[l]) {
            if (score <= 0) {
                return 0
            }
            power += sortedTokens[r]
            score -= 1
            r -= 1
            continue
        }

        // take left
        while (power >= sortedTokens[l]) {
            power -= sortedTokens[l]
            score += 1
            l += 1
        }
    }
    while (power >= sortedTokens[l]) {
        power -= sortedTokens[l]
        score += 1
        l += 1
    }

    return score
};
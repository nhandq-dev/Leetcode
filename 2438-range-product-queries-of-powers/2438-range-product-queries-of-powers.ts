function productQueries(n: number, queries: number[][]): number[] {
    if (n === 2) return [2];
    const MOD = 10**9+7
    const powers: number[] = getPower(n);
    const prefixProd: bigint[] = [1n]

    for (let i = 0; i < powers.length; i++) {
        prefixProd.push(prefixProd[prefixProd.length - 1] * BigInt(powers[i]))
    }

    return queries.map(([left, right]) => {
        return Number(prefixProd[right + 1] / BigInt(prefixProd[left])) % MOD
    })
};

function getPower(n: number): number[] {
    const answer: number[] = []

    while (n > 0) {
        const maxPowLessThanN = Math.pow(2, Math.floor(Math.log2(n)))
        answer.push(maxPowLessThanN)
        n -= maxPowLessThanN
    }
    answer.reverse()

    return answer
}

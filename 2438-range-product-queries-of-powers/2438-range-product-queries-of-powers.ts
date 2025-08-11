function productQueries(n: number, queries: number[][]): number[] {
    if (n === 2) return [2];
    const powers: number[] = getPower(n);
    let res: number[] = new Array(queries.length).fill(1);

    for (let i = 0; i < queries.length; i++) {
        const q = queries[i];
        if (q[0] === q[1]) {
            res[i] = powers[q[0]];
        } else {
            for (let j = q[0]; j <= q[1]; j++) {
                res[i] = (res[i] * powers[j]) % (10 ** 9 + 7);
            }
        }
    }

    return res;
};

// 6, [0,0]
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

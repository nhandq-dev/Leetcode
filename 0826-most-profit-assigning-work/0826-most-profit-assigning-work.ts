function maxProfitAssignment(difficulty: number[], profit: number[], workers: number[]): number {
    const arrDiffProfit: number[][] = difficulty.map((diff, idx) => [diff, profit[idx]])
    const n = profit.length
    arrDiffProfit.sort((a, b) => a[0] - b[0])

    for (let i = 1; i < n; i++) {
        arrDiffProfit[i][1] = Math.max(arrDiffProfit[i][1], arrDiffProfit[i - 1][1])
    }

    let res = 0
    let runner = 0
    workers.sort((a, b) => a-b)

    while (workers.length > 0 && workers[0] < arrDiffProfit[0][0]) workers.shift()

    for (const worker of workers) {
        let candidate = 0
        while (arrDiffProfit[runner] && arrDiffProfit[runner][0] <= worker) {
            candidate = arrDiffProfit[runner][1]
            runner++
        }
        runner--

        res += candidate
    }

    return res
};
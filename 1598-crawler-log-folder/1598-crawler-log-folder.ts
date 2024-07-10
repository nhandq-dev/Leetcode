function minOperations(logs: string[]): number {
    let res = 0

    for (const log of logs) {
        switch (log) {
            case '../':
                res = Math.max(0, res-1)
                break
            case './':
                break
            default:
                res++
                break
        }
    }

    return res
};
function averageWaitingTime(customers: number[][]): number {
    const n = customers.length
    let watingTime = customers[0][0]
    let res = 0

    for (const [arival, time] of customers) {
        watingTime = Math.max(watingTime, arival) + time
        res += Math.max(watingTime - arival, time)
    }

    return res / n
};

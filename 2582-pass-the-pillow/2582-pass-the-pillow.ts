function passThePillow(n: number, time: number): number {
    n -= 1
    const div = Math.floor(time / n)
    return 1 + (time <= n ? time : div % 2 === 0 ? time % n : n - time % n)
};
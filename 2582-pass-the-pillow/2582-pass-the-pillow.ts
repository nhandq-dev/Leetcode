function passThePillow(n: number, time: number): number {
    n -= 1
    return 1 + (
            Math.floor(time / n) % 2 === 0 ?
                time % n :
                n - time % n
    )
};
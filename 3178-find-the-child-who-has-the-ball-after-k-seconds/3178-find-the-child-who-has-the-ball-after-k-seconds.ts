function numberOfChild(n: number, k: number): number {
    let forward = true
    while (k > n-1) {
        k -= n-1
        forward = !forward
    }

    return !forward ? n-1-k : k
};
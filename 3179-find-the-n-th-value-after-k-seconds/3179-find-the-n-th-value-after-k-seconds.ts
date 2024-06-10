function valueAfterKSeconds(n: number, k: number): number {
    const MOD = 10 ** 9 + 7
    let arr = Array.from({ length: n }, _ => 1)

    while (k) {
        arr = arr.reduce((carr, num, idx) => {
            carr.push(((carr[idx - 1] || 0) + num) % MOD)
            return carr
        }, [])
        k--
    }

    return arr[n - 1]
};

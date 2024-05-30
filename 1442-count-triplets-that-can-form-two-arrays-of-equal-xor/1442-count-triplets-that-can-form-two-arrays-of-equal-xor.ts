function countTriplets(arr: number[]): number {
    const n = arr.length
    const prefixXOR: number[] = []
    prefixXOR.push(0)

    for (let i = 0; i < n; i++) {
        prefixXOR.push(prefixXOR[i] ^ arr[i])
    }
    let res = 0

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j; k < n; k++) {
                const a = prefixXOR[j] ^ prefixXOR[i]
                const b = prefixXOR[k + 1] ^ prefixXOR[j]

                res += a === b ? 1 : 0
            }
        }
    }


    return res
};
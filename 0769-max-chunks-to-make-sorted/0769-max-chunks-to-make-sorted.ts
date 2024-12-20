function maxChunksToSorted(arr: number[]): number {
    let chunks = 0;
    let maxi = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        maxi = Math.max(maxi, arr[i]);
        if (maxi <= i) {
            chunks++;
        }
    }
    return chunks;
}
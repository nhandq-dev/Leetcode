function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    const maxOfPossible = flowerbed.reduce((carr: number, f: number, idx: number, arr: number[]) => {
        if (f === 1) return carr
        if ((arr[idx-1] === undefined ? 0 : arr[idx-1]) + (arr[idx+1] === undefined ? 0 : arr[idx+1]) > 0) return carr
        arr[idx] = 1
        return carr + 1
    }, 0)


    return maxOfPossible >= n
};
function checkIfExist(arr: number[]): boolean {
    const setOfArr = new Set(arr)
    if (arr.filter(a => a===0).length > 1) return true

    return arr.filter(a => a!==0).some(a => setOfArr.has(a*2))
};
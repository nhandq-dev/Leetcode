function getWinner(arr: number[], k: number): number {
    if (k+1 >= arr.length) return Math.max(...arr);
    let candidate = Math.max(...arr.slice(0, k+1));

    while (arr[0] !== candidate && arr[1] !== candidate) {
        const candidateIdx = arr.indexOf(candidate);
        arr = [...arr.slice(Math.max(candidateIdx-1, 0)), ...arr.slice(0, candidateIdx)]
        candidate = Math.max(...arr.slice(0, k+1))
    }

    return candidate;
};
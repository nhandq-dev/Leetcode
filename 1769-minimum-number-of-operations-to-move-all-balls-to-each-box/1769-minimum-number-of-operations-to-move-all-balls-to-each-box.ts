function minOperations(boxes: string): number[] {
    const n = boxes.length
    const prefixStep: number[] = [+boxes.charAt(0)]
    const sufixStep: number[] = [+boxes.charAt(n - 1)]

    for (let i = 0; i < n - 1; i++) {
        prefixStep.push(prefixStep[i] + +boxes.charAt(i + 1))
        sufixStep.push(sufixStep[i] + +boxes.charAt(n - i - 2))
    }

    for (let i = 1; i < n; i++) {
        prefixStep[i] += prefixStep[i - 1]
        sufixStep[i] += sufixStep[i - 1]
    }

    return Array.from({ length: n }).map((_, idx: number) => {
        return (sufixStep[n - 2 - idx] || 0) + (prefixStep[idx-1] || 0)
    })
};
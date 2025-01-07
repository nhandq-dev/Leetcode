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
    prefixStep.unshift(0)
    sufixStep.unshift(0)

    return Array.from({ length: n }).map((_, idx: number) => {
        return sufixStep[n - 1 - idx] + prefixStep[idx]
    })
};
function dailyTemperatures(temperatures: number[]): number[] {
    const ans: number[] = new Array(temperatures.length).fill(0)
    const stack: number[] = []

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length !== 0 && temperatures[stack[stack.length-1]] < temperatures[i]) {
            const lastTemIdx = stack.pop()
            ans[lastTemIdx] = i - lastTemIdx
        }
        stack.push(i)
    }

    return ans
};

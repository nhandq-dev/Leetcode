function largestRectangleArea(heights: number[]): number {
    let res = 0

    // increcing stack
    const stack: number[] = [-1]

    for (let i = 0; i < heights.length; i++) {
        while (stack[stack.length-1] !== -1 && heights[stack[stack.length-1]] > heights[i]) {
            const candidate = stack.pop()
            const leftLimit = stack[stack.length-1]
            const rightLimit = i

            res = Math.max(res, heights[candidate] * (rightLimit - leftLimit - 1))
        }

        stack.push(i)
    }

    while (stack[stack.length - 1] !== -1) {
        const candidate = stack.pop()
        const leftLimit = stack[stack.length-1]
        const rightLimit = heights.length

        res = Math.max(res, heights[candidate] * (rightLimit - leftLimit - 1))
    }

    return res
};
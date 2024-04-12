function trap(height: number[]): number {
    let res = 0
    const n = height.length
    let leftWindow = height[0]
    let rightWindow = []

    for (let i = 1; i < n; i++) {
        while (rightWindow[rightWindow.length-1] < height[i] && rightWindow.length !== 0) {
            rightWindow.pop()
        }

        rightWindow.push(height[i])
    }

    for (let i = 1; i < n - 1; i++) {
        leftWindow = Math.max(leftWindow, height[i])

        res += Math.min(leftWindow, rightWindow[0]) - height[i]

        if (height[i] === rightWindow[0]) {
            rightWindow.shift()
        }
    }

    return res
};

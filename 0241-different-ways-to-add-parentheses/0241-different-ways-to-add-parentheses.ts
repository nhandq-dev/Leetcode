function diffWaysToCompute(expression: string): number[] {
    const dp = (expression: string): number[] => {
        const res: number[] = []
        let idx = 0
        while (expression[idx] !== undefined) {
            if (expression[idx] === '+') {
                const firstPaths = dp(expression.slice(0, idx))
                const secondPaths = dp(expression.slice(idx + 1))
                for (const firstPath of firstPaths) {
                    for (const secondPath of secondPaths) {
                        res.push(firstPath + secondPath)
                    }
                }
            } else if (expression[idx] === '-') {
                const firstPaths = dp(expression.slice(0, idx))
                const secondPaths = dp(expression.slice(idx + 1))
                for (const firstPath of firstPaths) {
                    for (const secondPath of secondPaths) {
                        res.push(firstPath - secondPath)
                    }
                }
            } else if (expression[idx] === '*') {
                const firstPaths = dp(expression.slice(0, idx))
                const secondPaths = dp(expression.slice(idx + 1))
                for (const firstPath of firstPaths) {
                    for (const secondPath of secondPaths) {
                        res.push(firstPath * secondPath)
                    }
                }
            }

            idx++
        }

        return res.length === 0 ? [parseInt(expression)] : res
    }

    return dp(expression)
};

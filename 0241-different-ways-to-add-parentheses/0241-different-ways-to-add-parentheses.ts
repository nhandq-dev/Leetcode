function diffWaysToCompute(expression: string): number[] {
    const calculate = (num1: number, num2: number, operator: string): number => {
        switch (operator) {
            case '+':
                return num1 + num2
            case '-':
                return num1 - num2
            case '*':
                return num1 * num2
        }
    }

    const dp = (expression: string): number[] => {
        const res: number[] = []
        for (let i = 0; i < expression.length; i++) {
            if (isNaN(parseInt(expression[i]))) {
                const firstPaths = dp(expression.slice(0, i))
                const secondPaths = dp(expression.slice(i + 1))

                for (const firstPath of firstPaths) {
                    for (const secondPath of secondPaths) {
                        res.push(calculate(firstPath, secondPath, expression[i]))
                    }
                }
            }
        }

        return res.length === 0 ? [parseInt(expression)] : res
    }

    return dp(expression)
};

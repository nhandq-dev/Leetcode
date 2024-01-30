function evalRPN(tokens: string[]): number {
    const clearStach = (stack: number[], operator: string): number => {
        switch (operator) {
            case '+':
                return stack[0] + stack[1];
            case '-':
                return stack[0] - stack[1];
            case '*':
                return stack[0] * stack[1];
            case '/':
                return parseInt(`${stack[0] / stack[1]}`);
        }
    }

    let stack: number[] = [];
    for (const token of tokens) {
        if (isNaN(parseInt(token))) {
            stack = [...stack.slice(0, -2), clearStach(stack.slice(-2), token)];
        } else {
            stack.push(parseInt(token));
        }
    }

    return stack[0];
};
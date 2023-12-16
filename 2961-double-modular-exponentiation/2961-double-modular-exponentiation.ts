function getGoodIndices(variables: number[][], target: number): number[] {
    const res: number[] = []

    for (let i = 0; i < variables.length; i++) {
        const [a, b, c, m] = variables[i]

        let simulateOfA = a % 10;
        for (let i = 1; i < b; i++) {
            simulateOfA = simulateOfA * a % 10
        }
        if (simulateOfA === 0) {
            if (target === 0) res.push(i)
            continue
        }

        let simulateOfB = simulateOfA % m;
        for (let i = 1; i < c; i++) {
            simulateOfB = simulateOfB * simulateOfA % m
        }

        if (simulateOfB === target) {
            res.push(i)
        }
    }

    return res
};
/**
1 * 1 = 1
2 * 2 = 4
3 * 3 = 9
4 * 4 = 
 */
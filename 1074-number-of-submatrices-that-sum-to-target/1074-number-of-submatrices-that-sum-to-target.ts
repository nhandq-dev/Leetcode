function numSubmatrixSumTarget(matrix: number[][], target: number): number {
    const n = matrix.length;
    const m = matrix[0].length;

    // Initialize a prefix sum matrix
    const prefixSum = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            prefixSum[i][j] = matrix[i - 1][j - 1] +
                prefixSum[i - 1][j] +
                prefixSum[i][j - 1] -
                prefixSum[i - 1][j - 1];
        }
    }

    let count = 0;

    // Iterate over all possible submatrices
    for (let top = 1; top <= n; top++) {
        for (let bottom = top; bottom <= n; bottom++) {
            for (let left = 1; left <= m; left++) {
                for (let right = left; right <= m; right++) {
                    const sum = prefixSum[bottom][right] -
                        prefixSum[top - 1][right] -
                        prefixSum[bottom][left - 1] +
                        prefixSum[top - 1][left - 1];

                    if (sum === target) {
                        count++;
                    }
                }
            }
        }
    }

    return count;
}

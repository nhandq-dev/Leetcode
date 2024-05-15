function maximumSafenessFactor(grid: number[][]): number {    
    const n = grid.length;
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const distances: number[][] = [];

    const queue = new Queue.Queue();

    for (let row = 0; row < n; row++) {
        distances[row] = [];
        for (let cell = 0; cell < n; cell++) {
            if (grid[row][cell] === 1) {
                distances[row][cell] = 0;
                queue.enqueue([row, cell]);
            } else {
                distances[row][cell] = Infinity;
            }
        }
    }
    
    while (queue.size()) {
        const [row, cell] = queue.dequeue();

        for (const [offsetR, offsetC] of directions) {
            const newRow = row + offsetR;
            const newCell = cell + offsetC;

            if (distances[newRow] && distances[newRow][newCell] === Infinity) {
                distances[newRow][newCell] = distances[row][cell] + 1;
                queue.enqueue([newRow, newCell]);
            }
        }
    }
    
    const pq = new PriorityQueue({
        compare: (a, b) => b[2] - a[2],
    });
    pq.enqueue([0, 0, distances[0][0]]);
    const seen: Set<number> = new Set([0]);
    let min: number = Infinity;

    while (pq.size()) {
        const [row, cell, distance] = pq.dequeue();

        min = Math.min(min, distance);

        if (row === n - 1 && cell === n - 1) {
            return min;
        }

        for (const [offsetR, offsetC] of directions) {
            const newRow = row + offsetR;
            const newCell = cell + offsetC;

            if (distances[newRow] && distances[newRow][newCell]) {
                const index = newRow * n + newCell;

                if (!seen.has(index)) {
                    seen.add(index);
                    pq.enqueue([newRow, newCell, distances[newRow][newCell]]);
                }
            }
        }
    }

    return 0;
};
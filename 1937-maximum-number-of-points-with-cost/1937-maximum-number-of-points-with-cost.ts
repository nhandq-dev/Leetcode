function maxPoints(points: number[][]): number {
    const rows = points.length
    if (rows === 1) return Math.max(...points[0])
    const cols = points[0].length
    const currRow: number[] = []
    let prevRow: number[] = []

    for (const row of points) {
        let runningMax = 0

        for (let i = 0; i < cols; i++) {
            runningMax = Math.max(runningMax - 1, (prevRow[i] || 0))
            currRow[i] = runningMax
        }

        runningMax = 0
        for (let i = cols - 1; i >= 0; i--) {
            runningMax = Math.max(runningMax - 1, (prevRow[i] || 0))
            currRow[i] = Math.max(runningMax, currRow[i]) + row[i]
        }

        prevRow = currRow
    }

    return Math.max(...prevRow)
};

/**
[
    [5,2,1,2],
    [2,1,5,2],
    [5,5,5,0]
]

 */
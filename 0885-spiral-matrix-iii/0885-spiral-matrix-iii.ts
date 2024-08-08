function spiralMatrixIII(rows: number, cols: number, rStart: number, cStart: number): number[][] {
    const direction: Map<string, number> = new Map();
    direction.set('right', 1)
    direction.set('down', 1)
    direction.set('left', 2)
    direction.set('up', 2)

    const currP: number[] = [rStart, cStart]
    const res: number[][] = []
    res.push([rStart, cStart])

    const isInvalidPoint = (point: number[]): boolean => {
        if (point[0] < 0 || point[1] < 0 || point[0] >= rows || point[1] >= cols) return false

        return true
    }

    while (res.length !== rows * cols) {
        // go right
        for (let i = 1; i <= direction.get('right'); i++) {
            currP[1] += 1;
            if (isInvalidPoint(currP)) res.push([currP[0], currP[1]])
        }
        direction.set('right', direction.get('right') + 2)
        if (res.length === rows * cols) {
            break
        }

        // Go down
        for (let i = 1; i <= direction.get('down'); i++) {
            currP[0] += 1;
            if (isInvalidPoint(currP)) res.push([currP[0], currP[1]])
        }
        direction.set('down', direction.get('down') + 2)
        if (res.length === rows * cols) {
            break
        }

        // Go left
        for (let i = 1; i <= direction.get('left'); i++) {
            currP[1] -= 1;
            if (isInvalidPoint(currP)) res.push([currP[0], currP[1]])
        }
        direction.set('left', direction.get('left') + 2)
        if (res.length === rows * cols) {
            break
        }

        // Go up
        for (let i = 1; i <= direction.get('up'); i++) {
            currP[0] -= 1;
            if (isInvalidPoint(currP)) res.push([currP[0], currP[1]])
        }
        direction.set('up', direction.get('up') + 2)
    }

    return res;
};

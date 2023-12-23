function isPathCrossing(path: string): boolean {
    const checkedPoint: Set<string> = new Set()
    let currentPoint = [0, 0]
    checkedPoint.add(`${currentPoint[0]},${currentPoint[1]}`)

    for (let i = 0; i < path.length; i++) {
        switch (path[i]) {
            case 'N':
                currentPoint[1] += 1
                break
            case 'E':
                currentPoint[0] += 1
                break
            case 'S':
                currentPoint[1] -= 1
                break
            case 'W':
                currentPoint[0] -= 1
                break
        }
        if (checkedPoint.has(`${currentPoint[0]},${currentPoint[1]}`)) {
            return true
        }

        checkedPoint.add(`${currentPoint[0]},${currentPoint[1]}`)
    }

    return false
};
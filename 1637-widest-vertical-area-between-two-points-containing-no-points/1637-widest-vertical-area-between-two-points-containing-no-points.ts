function maxWidthOfVerticalArea(points: number[][]): number {
    points.sort((a, b) => a[0] - b[0])
    return points.reduce((carry: number, item: number[], idx: number) => {
        if (idx === 0) return 0
        return Math.max(carry, item[0] - points[idx-1][0])
    }, 0)
};
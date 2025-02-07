function queryResults(limit: number, queries: number[][]): number[] {
    const colorMap: Map<number, number> = new Map()
    const setOfColor: Map<number, number> = new Map()

    const res= queries.map((q: number[]) => {
        const [ball, color] = q
        if (setOfColor.has(colorMap.get(ball))) {
            setOfColor.set(colorMap.get(ball), setOfColor.get(colorMap.get(ball)) - 1)

            if (setOfColor.get(colorMap.get(ball)) === 0) setOfColor.delete(colorMap.get(ball))
        }
        colorMap.set(ball, color)
        setOfColor.set(color, (setOfColor.get(color) || 0) + 1)

        return Math.min(colorMap.size, setOfColor.size)
    })

    return res
};
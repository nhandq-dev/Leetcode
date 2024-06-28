function maximumImportance(n: number, roads: number[][]): number {
    const cityEdge: [number, number][] = Array.from({ length: n }, (_, idx: number) => [idx, 0])
    const cityPoint: number[] = []

    for (const [a, b] of roads) {
        cityPoint.push(0)
        cityEdge[a][1]++
        cityEdge[b][1]++
    }
    cityEdge.sort(([__, numberOfRoad1], [_, numberOfRoad2]) => numberOfRoad2 - numberOfRoad1)

    for (let i=0; i<n; i++) {
        const [city, _] = cityEdge[i]
        cityPoint[city] = n-i
    }

    return roads.reduce((carr: number, [cityA, cityB]) => {
        return carr + cityPoint[cityA] + cityPoint[cityB]
    }, 0)
};
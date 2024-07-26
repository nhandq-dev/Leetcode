function findTheCity(n: number, edges: number[][], distanceThreshold: number): number {
    const cityMap: Map<number, Map<number, number>> = new Map()
    const neighMap: Map<number, number> = new Map()
    let minNeigh = Number.POSITIVE_INFINITY, res = 0

    for (const [city1, city2, w] of edges) {
        if (w > distanceThreshold) continue
        if (!cityMap.has(city1)) {
            cityMap.set(city1, new Map())
        }
        if (!cityMap.has(city2)) {
            cityMap.set(city2, new Map())
        }


        cityMap.get(city1).set(city2, Math.min(w, (cityMap.get(city1).get(city2) || Number.POSITIVE_INFINITY)))
        cityMap.get(city2).set(city1, Math.min(w, (cityMap.get(city2).get(city1) || Number.POSITIVE_INFINITY)))

        neighMap.set(city1, cityMap.get(city1).size)
        neighMap.set(city2, cityMap.get(city2).size)
    }

    if (cityMap.size < n) {
        for (let i = 0; i < n; i++) {
            if (!cityMap.has(i)) {
                res = i
            }
        }

        return res
    }

    for (const [city1, city2, w] of edges) {
        if (w > distanceThreshold) continue
        const neighbor1 = Array.from(cityMap.get(city1).keys())
        const neighbor2 = Array.from(cityMap.get(city2).keys())

        for (const n1 of neighbor1) {
            if (n1 !== city2 && cityMap.get(n1).get(city1) + w <= distanceThreshold) {
                cityMap.get(n1).set(city2, Math.min(cityMap.get(n1).get(city1) + w, (cityMap.get(n1).get(city2) || Number.POSITIVE_INFINITY)))

                neighMap.set(n1, cityMap.get(n1).size)
            }
        }

        for (const n2 of neighbor2) {
            if (n2 !== city1 && cityMap.get(n2).get(city2) + w <= distanceThreshold) {
                cityMap.get(n2).set(city1, Math.min(cityMap.get(n2).get(city2) + w, (cityMap.get(n2).get(city1) || Number.POSITIVE_INFINITY)))

                neighMap.set(n2, cityMap.get(n2).size)
            }
        }
    }
    for (const [city1, city2, w] of edges) {
        if (w > distanceThreshold) continue
        const neighbor1 = Array.from(cityMap.get(city1).keys())
        const neighbor2 = Array.from(cityMap.get(city2).keys())

        for (const n1 of neighbor1) {
            if (n1 !== city2 && cityMap.get(n1).get(city1) + w <= distanceThreshold) {
                cityMap.get(n1).set(city2, Math.min(cityMap.get(n1).get(city1) + w, (cityMap.get(n1).get(city2) || Number.POSITIVE_INFINITY)))

                neighMap.set(n1, cityMap.get(n1).size)
            }
        }

        for (const n2 of neighbor2) {
            if (n2 !== city1 && cityMap.get(n2).get(city2) + w <= distanceThreshold) {
                cityMap.get(n2).set(city1, Math.min(cityMap.get(n2).get(city2) + w, (cityMap.get(n2).get(city1) || Number.POSITIVE_INFINITY)))

                neighMap.set(n2, cityMap.get(n2).size)
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (neighMap.get(i) < minNeigh) {
            minNeigh = neighMap.get(i)
            res = i
        } else if (neighMap.get(i) === minNeigh) {
            res = Math.max(res, i)
        }
    }

    return res
};

/**

Map(5) {
  0 => Map(1) { 3 => 7, 1 => 5 },
  1 => Map(2) { 0 => 5, 3 => 6, 2 => 1 },
  2 => Map(2) { 4 => 1, 3 => 10, 1 => 1 },
  3 => Map(2) { 0 => 7, 2 => 10, 1 => 6 }
  4 => Map(3) { 2 => 1 },
}

 */
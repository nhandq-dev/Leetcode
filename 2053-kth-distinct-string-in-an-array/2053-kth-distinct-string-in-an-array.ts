function kthDistinct(arr: string[], k: number): string {
    const mapOfFreq: Map<string, number> = new Map()

    for (const s of arr) {
        mapOfFreq.set(s, (mapOfFreq.get(s) || 0) + 1)
    }
    const arrOfFreq: [string, number][] = Array.from(mapOfFreq.entries())

    return (arrOfFreq.filter(a => a[1] === 1)[k-1] || [''])[0]
};
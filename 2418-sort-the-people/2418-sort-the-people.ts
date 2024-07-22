function sortPeople(names: string[], heights: number[]): string[] {
    const arr = Array.from({ length: heights.length }, (_, idx) => idx)
    arr.sort((a,b) => heights[b] - heights[a])

    return arr.map(a => names[a])
};
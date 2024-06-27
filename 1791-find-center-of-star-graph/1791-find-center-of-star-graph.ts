function findCenter(edges: number[][]): number {
    let candidate = edges[0]
    
    for (const edge of edges) {
        candidate = candidate.filter(c => c === edge[1] || c === edge[0])
    }
    
    return candidate[0]
};
function secondMinimum(n: number, edges: number[][], time: number, change: number): number {
    const graph = Array.from({ length: n + 1 }, () => []);

    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const dist1 = new Array(n + 1).fill(-1);
    const dist2 = new Array(n + 1).fill(-1);
    dist1[1] = 0;

    const queue = [[1, 1]]; 

    while (queue.length > 0) {
        const [x, freq] = queue.shift();
        const t = freq === 1 ? dist1[x] : dist2[x];

        let newTime;
        if (Math.floor(t / change) % 2 !== 0) {
            newTime = change * (Math.floor(t / change) + 1) + time;
        } else {
            newTime = t + time;
        }

        for (const y of graph[x]) {
            if (dist1[y] === -1) {
                dist1[y] = newTime;
                queue.push([y, 1]);
            } else if (dist2[y] === -1 && dist1[y] !== newTime) {
                if (y === n) {
                    return newTime;
                }
                dist2[y] = newTime;
                queue.push([y, 2]);
            }
        }
    }

    return 0;
};
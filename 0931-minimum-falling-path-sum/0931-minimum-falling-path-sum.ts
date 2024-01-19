function minFallingPathSum(matrix: number[][]): number {
  const memos: Map<string, number> = new Map<string, number>();

  const traveling = (x: number, rankYMin: number, rankYMax: number): number => {
    rankYMin = Math.max(rankYMin, 0);
    rankYMax = Math.min(rankYMax, matrix.length - 1);
    if (memos.has(`${x}-${rankYMin},${rankYMax}`)) {
      return memos.get(`${x}-${rankYMin},${rankYMax}`);
    }
    if (x === matrix.length-1) {
      return Math.min(...matrix[x].slice(rankYMin, rankYMax+1));
    }

    let minPath = 10001;
    for (let i = rankYMin; i<=rankYMax; i++) {
      const subPath = traveling(x+1, i-1, i+1);
      memos.set(`${x+1}-${Math.max(i-1, 0)},${Math.min(i+1, matrix.length - 1)}`, subPath);
      minPath = Math.min(minPath, matrix[x][i] + subPath);
    }

    return minPath;
  }

  return traveling(0, 0, matrix.length - 1)
};
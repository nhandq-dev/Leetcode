function findMinArrowShots(points: number[][]): number {
  const sortedPoints: number[][] = points.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
  let res = 1;
  let [minX, maxX] = sortedPoints[0];
  let idx = 0;
  while (idx < points.length) {
    if (points[idx][0] > maxX || points[idx][1] < minX) {
      maxX = points[idx][1];
      res += 1;
    }
    [minX, maxX] = [Math.max(minX, points[idx][0]), Math.min(maxX, points[idx][1])];

    idx++;
  }

  return res;
};

// 23 / 49

/**

1                                    10
        3                       9   
            4                            11
                    6   7
                    6           9
                            8                 12
                                9             12

 */

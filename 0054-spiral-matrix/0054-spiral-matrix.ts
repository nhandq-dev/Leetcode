function spiralOrder(matrix: number[][]): number[] {
    if (matrix.length === 1) return matrix[0];
  const corner: { [key in string]: number } = {
    tl: 0,
    tr: matrix[0].length - 1,
    br: matrix.length - 1,
    bl: 0,
  };

  const res: number[] = [matrix[0][0]];
  const currP: number[] = [0, 0];

  while (res.length !== matrix.length * matrix[0].length) {
    switch (currP[0] + currP[1]) {
      case corner.tl + currP[1]: // when currP[0] at top-left
        while (currP[1] !== corner['tr']) {
          currP[1] += 1;
          res.push(matrix[currP[0]][currP[1]]);
        }
        corner.tl += 1;
        // break;

      case currP[0] + corner['tr']: // when currP[1] at top-right
        if (res.length === matrix.length * matrix[0].length) return res;
        while (currP[0] !== corner['br']) {
          currP[0] += 1;
          res.push(matrix[currP[0]][currP[1]]);
        }
        corner.tr -= 1;
        // break;

      case corner['br'] + currP[1]: // when currP[0] at bottom-right
        if (res.length === matrix.length * matrix[0].length) return res;
        while (currP[1] !== corner['bl']) {
          currP[1] -= 1;
          res.push(matrix[currP[0]][currP[1]]);
        }
        corner.br -= 1;
        // break;

      case currP[0] + corner['bl']: // when currP[1] at bottom-left
        if (res.length === matrix.length * matrix[0].length) return res;
        while (currP[0] !== corner['tl']) {
          currP[0] -= 1;
          res.push(matrix[currP[0]][currP[1]]);
        }
        corner.bl += 1;
        // break;
    }
  }

  return res;
}
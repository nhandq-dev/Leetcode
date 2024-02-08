function numSquares(n: number): number {
  const recusive = (currN: number, maxSum: number): number => {
    if (maxSum === 1) return currN;
    if (Math.sqrt(currN) % 1 === 0) return 1;

    let res = currN;
    for (let i = Math.floor(Math.sqrt(currN)); i>0; i--) {
      res = Math.min(res, 1 + recusive(currN-i**2, Math.min(maxSum-1, res)));
    }

    return res;
  }

  return recusive(n, n);
};

function rangeBitwiseAnd(left: number, right: number): number {
  if (left >= right) return right

  let shiftCount: number = 0;

  while (left !== right) {
    left >>= 1;
    right >>= 1;
    shiftCount++;
  }

  return left << shiftCount;
};
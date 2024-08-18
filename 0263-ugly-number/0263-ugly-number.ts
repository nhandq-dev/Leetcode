function isUgly(n: number): boolean {
  if (`${n}`.length === 1) return n !== 7 && n !== 0;
  switch (true) {
    case n%5 === 0:
      return isUgly(n/5);
    case n%3 === 0:
      return isUgly(n/3);
    case n%2 === 0:
      return isUgly(n/2);
  }
  return false;
};
function removeStones(stones: number[][]): number {
  if (stones.length === 1) return 0;
  let res=0;
  const rowStone: Map<number, number[][]> = new Map<number, number[][]>();
  const columnStone: Map<number, number[][]> = new Map<number, number[][]>();

  for (const stone of stones) {
    if (!rowStone.has(stone[0])) {
      rowStone.set(stone[0], []);
    }
    rowStone.set(stone[0], rowStone.get(stone[0]).concat([stone]));

    if (!columnStone.has(stone[1])) {
      columnStone.set(stone[1], []);
    }
    columnStone.set(stone[1], columnStone.get(stone[1]).concat([stone]));
  }

  const vistedStone: Map<string, boolean> = new Map<string, boolean>();
  const removeOn = function (stone: number[]): number {
    let res = 0;
    const stonesInSameRow = rowStone.get(stone[0]);
    for (const idx in stonesInSameRow) {
      if (!vistedStone.has(JSON.stringify(stonesInSameRow[idx]))) {
        vistedStone.set(JSON.stringify(stonesInSameRow[idx]), true);
        res += 1 + removeOn(stonesInSameRow[idx]);
      }
    }
    const stonesInSameColumn = columnStone.get(stone[1]);
    for (const idx in stonesInSameColumn) {
      if (!vistedStone.has(JSON.stringify(stonesInSameColumn[idx]))) {
        vistedStone.set(JSON.stringify(stonesInSameColumn[idx]), true);
        res += 1 + removeOn(stonesInSameColumn[idx]);
      }
    }

    return res;
  }

  for (const stone of stones) {
    if (vistedStone.has(JSON.stringify(stone))) continue;
    vistedStone.set(JSON.stringify(stone), true);
    res += removeOn(stone);
    if (res === stones.length - 2) return res;
  }

  return res;
};

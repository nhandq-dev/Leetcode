function numberOfArithmeticSlices(nums: number[]): number {
  let res: number = 0;
  const cnt: Map<number, number>[] = [];

  for (let i=0; i<nums.length; i++) {
    cnt[i] = new Map<number, number>();

    for (let j=0; j<i; j++) {
      const diff: number = nums[i]-nums[j];
      const sum = cnt[j].has(diff) ? cnt[j].get(diff) : 0;
      const origin = cnt[i].has(diff) ? cnt[i].get(diff) : 0;
      cnt[i].set(diff, origin + sum + 1);
      res += sum;
    }
  }

  return  res;
};

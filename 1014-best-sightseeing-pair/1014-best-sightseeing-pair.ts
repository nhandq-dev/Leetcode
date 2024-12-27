function maxScoreSightseeingPair (values: number[]): number {
    let maxLeft = values[0];
    let res = 0;
    for (let i = 1; i<values.length; i++) {
      res = Math.max(res, maxLeft + values[i] - i);
      maxLeft = Math.max(maxLeft, values[i]+i)
    }

    return res;
};
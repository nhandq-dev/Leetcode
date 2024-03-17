function insert(intervals: number[][], newInterval: number[]): number[][] {
  if (intervals.length === 0) return [newInterval];
  if (newInterval[1] < intervals[0][0]) return [newInterval, ...intervals];
  let res: number[][] = [];
  let flag = true;
  let tempBridg: number[] = newInterval;

  for (let idx=0; idx<intervals.length; idx++) {
    const item = intervals[idx];

    if (flag) {
      if (newInterval[0] <= item[1]) {
        if (newInterval[0] < item[0] && newInterval[1] < item[0]) {
          intervals.splice(idx, 0, newInterval);
          return intervals;
        }
        flag = false;
        tempBridg = [Math.min(item[0], newInterval[0]), Math.max(item[1], newInterval[1])];
      } else {
        res.push(item)
      }
    } else {
      if (newInterval[1] < item[0]) {
        tempBridg[1] = Math.max(tempBridg[1], intervals[idx-1][1]);
        res.push(tempBridg);
        res = [...res, ...intervals.slice(idx)];
        return res;
      } else if (newInterval[1] === item[0]) {
        tempBridg[1] = Math.max(tempBridg[1], item[1]);
        res.push(tempBridg);
        res = [...res, ...intervals.slice(idx+1)];
        return res;
      }
      tempBridg[1] = Math.max(tempBridg[1], item[1]);
    }
  }
  res.push(tempBridg)

  return res;
};

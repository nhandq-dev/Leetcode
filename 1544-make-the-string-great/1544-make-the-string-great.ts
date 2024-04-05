function makeGood(s: string): string {
  let idx=0;
  while (s.length !== 0 && idx !== s.length) {
    if (s[idx] && s[idx+1] && s[idx+1].toLowerCase() === s[idx].toLowerCase() && s[idx+1] !== s[idx]) {
      s = s.substring(0, idx) + s.substring(idx+2);
      idx--;
      continue;
    }
    idx++;
  }
  return s;
};
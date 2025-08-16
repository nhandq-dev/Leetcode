function maximum69Number (num: number): number {
  for (let i=0; i<`${num}`.length; i++) {
    if (`${num}`.charAt(i) === '6') {
      const res = `${num}`.substring(0, i) + '9' + `${num}`.substring(i+1);
      return parseInt(res)
    }
  }

  return num;
};
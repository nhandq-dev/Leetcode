function numberOfBeams(bank: string[]): number {
  const devices: number[] = bank.map(e => (e.match(/1/g) || []).length).filter(a => a !== 0);
  
  if (!devices.length || devices.length === 1) {
    return 0;
  }

  let sum = 0;

  for (let i = 1; i < devices.length; i++) {
    sum += devices[i] * devices[i - 1];
  }
  
  return sum;
}
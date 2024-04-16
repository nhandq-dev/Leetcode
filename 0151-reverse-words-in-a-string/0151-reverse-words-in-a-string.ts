function reverseWords(s: string): string {
  return s.trim().replace(/ +(?= )/g,'').split(' ').reverse().join(' ');
};
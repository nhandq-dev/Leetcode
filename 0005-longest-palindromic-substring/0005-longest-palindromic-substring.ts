function longestPalindrome(str: string): string {
  const dp: boolean[][] = [[true]];
  let res: string = str[0];

  for (let i:number = 1; i < str.length; i++) {
    dp[i] = [];
    dp[i][i] = true;

    for (let j:number = i-1; j >= 0; j--) {
      dp[j][i] = false;
      if (str[i] === str[j] && (dp[j+1][i-1] === undefined || !!dp[j+1][i-1])) {
        dp[j][i] = true;
        res = res.length < (i+1-j) ? str.substring(j, i+1) : res;
      }
    }
  }
  
  return res
};
function longestCommonSubsequence(text1: string, text2: string): number {
   let dp = [];
   const text1Size = text1.length, text2Size = text2.length;
   for(let i = 0; i <= text1Size ; i++){
       dp[i] = [];
       for(let j = 0; j <= text2Size ; j++){
           dp[i][j] = 0;
       }
   }
    
   for(let i = 1; i <= text1Size ; i++){
       for(let j = 1; j <= text2Size ; j++){
           if(text1[i-1] === text2[j - 1]) { dp[i][j] = dp[i-1][j-1] + 1;}else{
               dp[i][j] = Math.max(dp[i-1][j] , dp[i][j-1]);
           }
       }
   }
    
   return dp[text1Size][text2Size];
};

function climbStairs(n: number): number {
    const dp: number[] = new Array(n+1).fill(1);

    for(let i:number=2;i<=n;i++) dp[i] = dp[i-2]+dp[i-1];

    return dp[n];
};
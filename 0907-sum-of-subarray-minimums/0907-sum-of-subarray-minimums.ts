function sumSubarrayMins(arr: number[]): number {
    let res: number = 0
    const dp: number[] = []
    const stack: number[] = []

    for (let i = 0; i < arr.length; i++) {
        while (stack.length !== 0 && arr[stack[stack.length-1]] >= arr[i]) {
            stack.pop()
        }

        if (stack.length) {
            const previousSmaller = stack[stack.length-1]
            dp[i] = dp[previousSmaller] + (i-previousSmaller)*arr[i]
        } else {
            dp[i] = (i+1)*arr[i]
        }
        stack.push(i)
        res += dp[i]
    }

    return res % (10 ** 9 + 7)
};

function judgeSquareSum(c: number): boolean {
    let a = 0;
    let b = Math.floor(Math.sqrt(c));

    while (a <= b) {
        if (a * a + b * b > c) {
            b--;
        } else if (a * a + b * b < c) {
            a++
        } else {
            return true
        }
    }

    return false
};
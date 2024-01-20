function sumSubarrayMins(arr: number[]): number {
    let res: number = 0

    for (let i = 0; i < arr.length; i++) { // n
        let leftCount = 0
        let rightCount = 0

        for (let leftRunner = i - 1; leftRunner >= 0; leftRunner--) {
            if (arr[leftRunner] < arr[i]) break
            leftCount++
        }

        for (let rightRunner = i + 1; rightRunner < arr.length; rightRunner++) {
            if (arr[rightRunner] <= arr[i]) break
            rightCount++
        }

        res += (leftCount + rightCount + leftCount*rightCount + 1) * arr[i]
        res %= (10 ** 9 + 7)
    }

    return res % (10 ** 9 + 7)
};

/**
7   5   8   5

7 + 5 + 8 + 5 + 5 + 5 + 5 + 5 + 5 +5

7
(7,5) + (5,8) + (5,8,5) + (7,5,8) + (7,5,8,5) + 5
8
5 + (8,5)

 */
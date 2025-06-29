function modPow(base, exponent, mod) {
    let result = 1n;
    base = BigInt(base) % BigInt(mod);
    exponent = BigInt(exponent);
    mod = BigInt(mod);

    while (exponent > 0n) {
        if (exponent % 2n === 1n)
            result = (result * base) % mod;
        base = (base * base) % mod;
        exponent = exponent / 2n;
    }
    return result;
}

function numSubseq(nums: number[], target: number): number {
    const module = 1000000007n
    nums.sort((a, b) => a - b)

    // return the index of the closest or equal to num from nums 
    const fincClosest = (num: number): number => {
        let l = 0, r = nums.length - 1

        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2)

            if (num < nums[mid]) {
                r = mid - 1
            } else if (num > nums[mid]) {
                l = mid + 1
            } else {
                while (nums[mid + 1] === nums[mid]) {
                    mid++
                }
                return mid
            }
        }

        return l - 1
    }

    let currMin = 0
    let answer = 0n
    while (nums[currMin] < target && currMin < nums.length) {
        const farestIdx = fincClosest(target - nums[currMin])
        if (farestIdx < currMin) break

        answer += modPow(2, farestIdx - currMin, module)
        currMin++
    }

    return Number(answer % module)
};

/**

2^1718 / (10^9 + 7)


(a + x) % mod === 0
(b + x) % mod === 0
(a + x) / (b + x) = n (n primal number)
a = b*n + (n-1)x
x = (a - b*n)/(n-1)


        0   1   2   3   4   5
   0    1
   1    1   2
   2    1   2   3
   3    1   2   3   4
   4    1   2   3   4   5
   5    1   2   3   4   5   6
   6    1   2   3   4       6
   7    1   2   3       5
   8    1   2   3       5   6
   9    1   2   3           6
  10    1   2       4
  11    1   2       4   5
  12    1   2       4   5   6
  13    1   2       4       6
  14    1   2           5
  15    1   2           5   6
  16    1   2               6
  17    1       3
  18    1       3   4
  19    1       3   4   5
  20    1       3   4   5   6
  21    1       3   4       6
  22    1       3       5
  23    1       3       5   6
  24    1       3           6
  25    1           4
  26    1           4   5
  27    1           4   5   6
  28    1           4       6
  29    1               5
  30    1               5   6
  31    1                   6


6 => 32
*/
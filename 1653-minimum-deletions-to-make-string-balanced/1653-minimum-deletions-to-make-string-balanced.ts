function minimumDeletions(s: string): number {
    const aIdx: number[] = []
    const bIdx: number[] = []
    const isStartWithA = s.charCodeAt(0) === 97
    let countA = 0, countB = 0
    let totalA = 0, totalB = 0

    for (let i = 0; i < s.length; i++) {
        if (s.at(i) === 'a') {
            if (countB !== 0) {
                bIdx.push(countB)
                totalB += countB
                countB = 0
            }
            countA++
        } else {
            if (countA !== 0) {
                aIdx.push(countA)
                totalA += countA
                countA = 0
            }
            countB++
        }
    }
    if (countB !== 0) {
        bIdx.push(countB)
        totalB += countB
        countB = 0
    } else if (countA !== 0) {
        aIdx.push(countA)
        totalA += countA
        countA = 0
    }

    const biggerBinaSearch = (nums: number[], num: number) => {
        let l = 0, r = nums.length - 1

        while (l <= r) {
            const m = l + Math.floor((r - l) / 2)

            if (num < nums[m]) {
                r = m - 1
            } else {
                l = m + 1
            }
        }

        return nums[l] > num ? l : l + 1
    }
    const smallerBinaSearch = (nums: number[], num: number) => {
        let l = 0, r = nums.length - 1

        while (l <= r) {
            const m = l + Math.floor((r - l) / 2)

            if (num < nums[m]) {
                r = m - 1
            } else {
                l = m + 1
            }
        }

        return l - 1
    }

    if ((isStartWithA && aIdx.length === 1) || (!isStartWithA && aIdx.length === 0) || bIdx.length === 0) return 0

    let res = Number.POSITIVE_INFINITY

    if (isStartWithA) {
        res = Math.min(totalA - aIdx[0], totalB)
        let currSum = aIdx[0]
        for (let i = 1; i < aIdx.length; i++) {
            if (bIdx[i - 1] === undefined) break
            currSum += aIdx[i] - bIdx[i - 1]
            res = Math.min(res, totalA - currSum)
        }
    } else {
        res = totalA
        let currSum = 0
        for (let i = 0; i < bIdx.length; i++) {
            if (aIdx[i] === undefined) break
            currSum += bIdx[i] - aIdx[i]
            res = Math.min(res, totalA + currSum)
        }
    }

    return res
};

/**
44 38 25

[
   0,  2,  3,  7,  9, 10, 20, 21, 22, 23,
  25, 26, 29, 30, 33, 34, 39, 43, 48, 51,
  54, 57, 58, 59, 62, 63, 65, 66, 67, 69,
  71, 73, 75, 76, 77, 79, 81, 83, 84, 86,
  87, 88, 89, 90, 91, 93, 94, 100
] [
   1,  4,  5,  6,  8, 11, 12, 13, 14, 15,
  16, 17, 18, 19, 24, 27, 28, 31, 32, 35,
  36, 37, 38, 40, 41, 42, 44, 45, 46, 47,
  49, 50, 52, 53, 55, 56, 60, 61, 64, 68,
  70, 72, 74, 78, 80, 82, 85, 92, 95, 96,
  97, 98, 99, 101, 102, 103
]

[
   0,   1,   6,   7,   9,  11,  16,  17,  18, 19,
  20,  21,  24,  26,  28,  29,  30,  32,  33, 35,
  36,  40,  45,  48,  51,  53,  55,  56,  58, 59,
  61,  66,  67,  68,  69,  70,  73,  76,  78, 79,
  80,  81,  85,  87,  88,  89,  90,  93,  94, 95,
  99, 100, 103, 104, 105, 106, 107, 109, 110
] [
   2,   3,   4,   5,   8,  10,  12,  13,  14,  15,
  22,  23,  25,  27,  31,  34,  37,  38,  39,  41, 
  42,  43,  44,  46,  47,  49,  50,  52,  54,  57,
  60,  62,  63,  64,  65,  71,  72,  74,  75,  77,
  82,  83,  84,  86,  91,  92,  96,  97,  98, 101,
 102, 108
]

  */ 
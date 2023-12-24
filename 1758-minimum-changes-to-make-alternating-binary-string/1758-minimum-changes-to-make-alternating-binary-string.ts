function minOperations(s: string): number {
    let stepChangeToOne = 0
    let stepChangeToZero = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            stepChangeToOne += i % 2
            stepChangeToZero += (i + 1) % 2
        } else {
            stepChangeToOne += (i + 1) % 2
            stepChangeToZero += i % 2
        }
    }

    return Math.min(stepChangeToOne, stepChangeToZero)
};

/**
10010100

stepChangeToOne = 0
stepChangeToZero = 1

i = 1
s[i] = 0
stepChangeToOne = 



 */
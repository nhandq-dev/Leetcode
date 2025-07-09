function maxFreeTime(eventTime: number, k: number, startTime: number[], endTime: number[]): number {
    // find the biggest gap time
    let maxVal = 0
    let currentLeft = 0
    const gaps: number[] = []
    for (let i = 0; i < startTime.length; i++) {
        gaps.push(startTime[i] - currentLeft)
        currentLeft = endTime[i]
    }
    gaps.push(eventTime - currentLeft)

    // innitiate windows
    let windowsVal = 0
    for (let i = 0; i <= k; i++) {
        windowsVal += gaps[i]
    }

    // sliding the windows
    let answer = windowsVal
    for (let i = 1; i < gaps.length-k; i++) {
        windowsVal -= gaps[i - 1]
        windowsVal += gaps[i + k]
        answer = Math.max(answer, windowsVal)
    }

    return answer
};

/**

we can find the max gap times between event first then try to make that gap bigger
after found the biggest gap we can either think of moving the event between in left
or right whenever has bigger gap


34  16  32  29  27  1   0
0   1   2   3   4   5   6


 */
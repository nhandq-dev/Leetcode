function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {
    const durationMap: number[][] = startTime.map((start, idx) => {
        return [start, endTime[idx], profit[idx]];
    }).sort((a, b) => a[0] === b[0] ? a[1] === b[1] ? a[2] - b[2] : a[1] - b[1] : a[0] - b[0]);
    const memos: Map<string, number> = new Map<string, number>();

    const getNextIdx = (idx: number): number => {
        let left = 0;
        let right = startTime.length - 1;
        let nextIdx = startTime.length;

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);

            if (durationMap[mid][0] >= durationMap[idx][1]) {
                nextIdx = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return nextIdx;
    }

    const dp = (idx: number): number => {
        if (durationMap[idx] === undefined) return 0;

        if (!memos.has(`${idx}`)) {
            memos.set(`${idx}`, 0);
            const nextIdx = getNextIdx(idx);

            memos.set(
                `${idx}`,
                Math.max(dp(idx + 1), durationMap[idx][2] + dp(nextIdx))
            );
        }

        return memos.get(`${idx}`);
    }

    return dp(0);
};

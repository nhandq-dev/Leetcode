function subarraySum(nums: number[], k: number): number {
    let map = new Map<number, number>([[0,1]]);
    let current: number = 0;
    let matches: number = 0;

    for(let i = 0; i < nums.length; i++){
        current += nums[i]; // 1    6   15
        matches += map.get(current - k) ?? 0; // 0

        map.set(current, (map.get(current) ?? 0) + 1)
    }
    console.log(map)

    return matches;
};
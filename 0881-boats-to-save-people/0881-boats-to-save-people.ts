function numRescueBoats(people: number[], limit: number): number {
    const sortedWeight = people.sort((a, b) => a - b);
    let res = 0;
    
    const dp = (peopleLeft: number[]): void => {
        if (peopleLeft.length === 0) return;
        if (peopleLeft.length === 1) {
            res += 1;
            return;
        }

        let i=0;
        let j=peopleLeft.length - 1;

        while (peopleLeft[i] + peopleLeft[j] > limit && j > i + 1) {
            j -= 1;
        }

        if ((peopleLeft[i] + peopleLeft[j]) > limit) {
            res += 1;
            peopleLeft.splice(j, 1);
            return dp(peopleLeft);
        }

        res += 1;
        peopleLeft.splice(j, 1);
        peopleLeft.splice(i, 1);
        return dp(peopleLeft);
    }
    dp(sortedWeight);

    return res;
};
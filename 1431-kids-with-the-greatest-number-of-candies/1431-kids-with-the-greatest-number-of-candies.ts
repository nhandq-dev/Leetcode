function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const max = Math.max(...candies)
    return candies.reduce((carr: boolean[], can: number) => [...carr, can+extraCandies>=max], [])
};
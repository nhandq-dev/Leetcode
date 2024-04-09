function timeRequiredToBuy(tickets: number[], k: number): number {
    return tickets.reduce((carry: number, item: number, idx: number) => carry + Math.min(item, tickets[k] - (idx <= k ? 0 : 1)), 0)
};

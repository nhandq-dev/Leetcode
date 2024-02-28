function maxProfit(prices: number[]): number {
    // Store the maximum profit under different situations
    let coolDown = 0;                       // Cool down (sold yesterday, cannot buy stock today & no stock in hand to sell)
    let holding = Number.MIN_SAFE_INTEGER;  // Holding stock today (not buying or selling)
    let selling = 0;                        // Selling stock today
    
    for (let price of prices) {
        const tempCoolDown = Math.max(coolDown, selling); // Can't buy, just update itself if we sold stock yesterday
        const tempHolding = Math.max(holding, coolDown - price); // Use (current max - price) to buy stock
        const tempSelling = holding + price; // Total profit = money in hand + gain if we choose to sell today
        
        coolDown = tempCoolDown;
        holding = tempHolding;
        selling = tempSelling;
    }
    
    return Math.max(coolDown, selling);
};
function maxProfit(prices: number[], fee: number): number {
	let cash = 0;
	let hold = -Infinity;

	for (let i = 0; i < prices.length; i++) {
		cash = Math.max(cash, hold + prices[i] - fee);
		hold = Math.max(hold, cash - prices[i]);
	}

	return cash;
};
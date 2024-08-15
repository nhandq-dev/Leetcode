function lemonadeChange(bills: number[]): boolean {
    let currCoinOf5 = 0
    let currCoinOf10 = 0

    for (const b of bills) {
        switch (b) {
            case 5:
                currCoinOf5 += 1
                break;

            case 10:
                if (currCoinOf5 < 1) return false
                currCoinOf10 += 1
                currCoinOf5 -= 1
                break

            case 20:
                if (currCoinOf5 < 1) return false
                if (currCoinOf10 < 1) {
                    if (currCoinOf5 < 3) return false
                    currCoinOf5 -= 3
                } else {
                    currCoinOf10 -= 1
                    currCoinOf5 -= 1
                }
                break
        }
    }

    return true
};
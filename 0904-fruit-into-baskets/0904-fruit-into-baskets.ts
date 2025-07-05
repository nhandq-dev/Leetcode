function totalFruit(fruits: number[]): number {
    const basketFreq: Map<number, number> = new Map()
    let l = 0, r = 0
    basketFreq.set(fruits[l], 1)
    let answer = 1

    while (l < fruits.length - 1) {
        r++
        while (r < fruits.length) {
            basketFreq.set(fruits[r], (basketFreq.get(fruits[r]) || 0) + 1)
            if (basketFreq.size > 2) break
            r++
        }
        answer = Math.max(answer, r - l)
        if (basketFreq.size <= 2) break

        while (basketFreq.size > 2) {
            basketFreq.set(fruits[l], basketFreq.get(fruits[l]) - 1)
            if (basketFreq.get(fruits[l]) === 0) basketFreq.delete(fruits[l])
            l++
        }
    }

    return answer
};

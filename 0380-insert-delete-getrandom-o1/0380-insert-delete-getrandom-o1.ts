class RandomizedSet {
    private hash: Set<number>

    constructor() {
        this.hash = new Set()
    }

    insert(val: number): boolean {
        if (!this.hash.has(val)) {
            this.hash.add(val)
            return true;
        }
        return false;
    }

    remove(val: number): boolean {
        if (this.hash.has(val)) {
            this.hash.delete(val)
            return true;
        }
        return false;
    }

    getRandom(): number {
        return Array.from(this.hash)[Math.floor(Math.random() * this.hash.size)];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
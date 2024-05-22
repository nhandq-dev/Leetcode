class PalindromeString {
    private firstHaft: string[];
    private rotatedSecondHaft: string[];

    constructor() {
        this.firstHaft = []
        this.rotatedSecondHaft = []
    }

    isPalindrome(): boolean {
        if (this.firstHaft.length === 0 && this.rotatedSecondHaft.length === 0) {
            return false
        }
        const minLength = Math.min(this.firstHaft.length, this.rotatedSecondHaft.length)

        return this.firstHaft.length === this.rotatedSecondHaft.length ?
            this.firstHaft.join('') === this.rotatedSecondHaft.join('') :
            this.firstHaft.length === minLength ?
                this.firstHaft.join('') === this.rotatedSecondHaft.slice(0, minLength).join('') :
                this.firstHaft.slice(0, minLength).join('') === this.rotatedSecondHaft.join('')
    }

    insert(char: string): void {
        const minLength = Math.min(this.firstHaft.length, this.rotatedSecondHaft.length)

        if (this.firstHaft.length !== this.rotatedSecondHaft.length && this.firstHaft.length === minLength) {
            this.firstHaft.push(this.rotatedSecondHaft.pop())
        }

        this.rotatedSecondHaft.unshift(char)
    }

    pop(): void {
        this.rotatedSecondHaft.shift()
        const minLength = Math.min(this.firstHaft.length, this.rotatedSecondHaft.length)

        if (this.firstHaft.length !== this.rotatedSecondHaft.length && this.rotatedSecondHaft.length === minLength) {
            this.rotatedSecondHaft.push(this.firstHaft.pop())
        }
    }

    get(): string {
        return this.firstHaft.concat([...this.rotatedSecondHaft].reverse()).join('')
    }
}

function partition(s: string): string[][] {
    const memos: Map<number, string[][]> = new Map()
    const backTracking = (idx: number): string[][] => {
        if (s[idx] === undefined) return []
        if (!memos.has(idx)) {
            const palindromeStr = new PalindromeString()
            let res: string[][] = []

            for (let i = idx; i < s.length; i++) {
                palindromeStr.insert(s[i]) // aab

                if (!palindromeStr.isPalindrome()) {
                    continue
                }

                if (i === s.length - 1) {
                    res.push([palindromeStr.get()])
                }
                const nextPathRes = backTracking(i + 1) //[ [ 'b' ] ]
                if (nextPathRes.length) {
                    res = [...res, ...nextPathRes.reduce((carr: string[][], item: string[]) => [
                        ...carr,
                        [palindromeStr.get(), ...item]
                    ], [])] // [ ['a', 'a', 'b'], ['aa', 'b'] ]
                }
            }

            memos.set(idx, res)
        }

        return memos.get(idx)
    }

    return backTracking(0)
};
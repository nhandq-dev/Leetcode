class PalindromeString {
    private firstHaft: string;
    private secondHaft: string

    constructor() {
        this.firstHaft = ''
        this.secondHaft = ''
    }

    isPalindrome(): boolean {
        if (this.firstHaft === '' && this.secondHaft === '') {
            return false
        }
        const minLength = Math.min(this.firstHaft.length, this.secondHaft.length)

        return this.firstHaft.length === this.secondHaft.length ?
            this.firstHaft === this.secondHaft :
            this.firstHaft.length === minLength ?
                this.firstHaft === this.secondHaft.slice(0, minLength) :
                this.firstHaft.slice(0, minLength) === this.secondHaft
    }

    insert(char: string): void {
        const minLength = Math.min(this.firstHaft.length, this.secondHaft.length)

        if (this.firstHaft.length !== this.secondHaft.length && this.firstHaft.length === minLength) {
            this.firstHaft = `${this.firstHaft}${this.secondHaft[minLength]}`
            this.secondHaft = this.secondHaft.substring(0, minLength)
        }

        this.secondHaft = `${char}${this.secondHaft}`
    }

    pop(): void {
        this.secondHaft = this.secondHaft.substring(0, this.secondHaft.length - 1)
        const minLength = Math.min(this.firstHaft.length, this.secondHaft.length)

        if (this.firstHaft.length !== this.secondHaft.length && this.secondHaft.length === minLength) {
            this.secondHaft = `${this.secondHaft}${this.firstHaft[minLength]}`
            this.firstHaft = this.firstHaft.substring(0, minLength)
        }
    }

    get(): string {
        return `${this.firstHaft}${this.secondHaft.split('').reverse().join('')}`
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
                palindromeStr.insert(s[i])

                if (!palindromeStr.isPalindrome()) {
                    continue
                }

                if (i === s.length - 1) {
                    res.push([palindromeStr.get()])
                }
                const nextPathRes = backTracking(i + 1)

                if (nextPathRes.length) {
                    nextPathRes.map((item: string[]) => {
                        res.push([palindromeStr.get(), ...item])
                    })
                }
            }

            memos.set(idx, res)
        }

        return memos.get(idx)
    }

    return backTracking(0)
};
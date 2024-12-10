function canChange(start: string, target: string): boolean {
    const n = start.length

    const nextLetter = (str: string, from: number) => {
        let runner = from

        while (str.charAt(runner) === '_' && runner < n) {
            runner++
        }

        return runner
    }

    let sRunner = -1, tRunner = -1

    while (tRunner < n && sRunner < n) {
        sRunner = nextLetter(start, sRunner + 1)
        tRunner = nextLetter(target, tRunner + 1)
        console.log(sRunner, tRunner)

        if (start.charAt(sRunner) !== target.charAt(tRunner)) return false

        if (target.charAt(tRunner) === 'L') {
            if (tRunner > sRunner) return false
        } else {
            if (tRunner < sRunner) return false
        }
    }

    return true
};
function chalkReplacer(chalk: number[], k: number): number {
    const totalChalkRequire = chalk.reduce((carr, c) => carr + c, 0)
    let chalkLeft = k % totalChalkRequire

    for (let i=0; i<chalk.length; i++) {
        if (chalk[i] > chalkLeft) {
            return i
        }
        chalkLeft -= chalk[i]
    }

    return 0
};
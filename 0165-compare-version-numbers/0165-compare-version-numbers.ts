function compareVersion(version1: string, version2: string): number {
    if (version1 === version2) return 0
    const arrPathVer1 = version1.split('.').map(i => parseInt(i))
    const arrPathVer2 = version2.split('.').map(i => parseInt(i))

    let runner1 = arrPathVer1.shift()
    let runner2 = arrPathVer2.shift()

    while (arrPathVer1.length !== 0 || arrPathVer2.length !== 0) {
        if (runner1 > runner2) {
            return 1
        } else if (runner1 < runner2) {
            return -1
        }

        runner1 = arrPathVer1.shift() || 0
        runner2 = arrPathVer2.shift() || 0
    }

    return runner1 > runner2 ? 1 : runner1 === runner2 ? 0 : -1
};
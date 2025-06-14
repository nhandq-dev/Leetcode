function minMaxDifference(num: number): number {
    const firstDigi = num.toString().charAt(0)
    const n = num.toString().length
    let i = 0
    while (i < n && num.toString().charAt(i) === '9') {
        i++
    }

    return (i === n ? num : parseInt(num.toString().replaceAll(num.toString().charAt(i), '9'))) - parseInt(num.toString().replaceAll(firstDigi, '0'))
};
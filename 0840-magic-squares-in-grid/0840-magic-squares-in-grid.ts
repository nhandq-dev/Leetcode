const VALID_SET_OF_MAGIC_SQUARE = new Set([
    '195',
    '159',
    '186',
    '168',
    '294',
    '249',
    '276',
    '267',
    '258',
    '285',
    '348',
    '384',
    '357',
    '375',
    '438',
    '483',
    '492',
    '429',
    '456',
    '465',
    '591',
    '519',
    '537',
    '573',
    '528',
    '582',
    '546',
    '564',
    '681',
    '618',
    '627',
    '672',
    '645',
    '654',
    '753',
    '735',
    '726',
    '762',
    '834',
    '843',
    '816',
    '861',
    '825',
    '852',
    '915',
    '951',
    '924',
    '942'
])

function numMagicSquaresInside(grid: number[][]): number {
    const nRow = grid.length
    if (nRow < 3) return 0
    const nCol = grid[0].length
    if (nCol < 3) return 0
    let res = 0

    for (let i = 0; i <= nRow - 3; i++) {
        for (let j = 0; j <= nCol - 3; j++) {
            const cross1 = `${grid[i][j]}${grid[i+1][j+1]}${grid[i+2][j+2]}`
            if (!VALID_SET_OF_MAGIC_SQUARE.has(cross1)) continue
            const cross2 = `${grid[i+2][j]}${grid[i+1][j+1]}${grid[i][j+2]}`
            if (!VALID_SET_OF_MAGIC_SQUARE.has(cross2)) continue
            let isValidGrid = true

            for (let k = 0; k < 3; k++) {
                const row = grid[i + k].slice(j, j + 3).join('')
                const col = `${grid[i][j + k]}${grid[i + 1][j + k]}${grid[i + 2][j + k]}`

                if (!VALID_SET_OF_MAGIC_SQUARE.has(row) || !VALID_SET_OF_MAGIC_SQUARE.has(col)) {
                    isValidGrid = false
                    break
                }
            }

            if (isValidGrid) {
                res++
            }
        }
    }

    return res
};
function checkValidString(s: string): boolean {
    const n = s.length; let min = 0, max = 0;
    for ( let i = 0; i < n; i++ )
        if ( s[ i ] === '(' )
            min++, max++
        else if ( s[ i ] === ')' ) {
            if ( max === 0 ) return false;
            min = Math.max( 0, min - 1 ), max--;
        } else
            min = Math.max( 0, min - 1 ), max++;
    return min === 0;
};
function kthCharacter(k: number): string {
    const numOfOperation = Math.ceil(k/2)

    while (true) {
        switch (k) {
            case 1:
                return 'a'
            case 2:
                return 'b'
            case 3:
                return 'b'
            case 4:
                return 'c'
            case 5:
                return 'b'

            default:
                return String.fromCharCode(kthCharacter(k - (2 ** Math.ceil(Math.log2(k) - 1))).charCodeAt(0) + 1)
        }
    }
};
/**

at each operation the length of the string become n*2
k character === (k/2) character + 1

1        1
2        11
3        1212
4        12341234
5        1234567812345678

 */
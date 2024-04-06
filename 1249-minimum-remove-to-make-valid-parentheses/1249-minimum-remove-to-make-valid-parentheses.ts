function minRemoveToMakeValid(s: string): string {
    const openIdx: number[] = []
    const closeIdx: number[] = []

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '(':
                openIdx.push(i);
                break;

            case ')':
                closeIdx.push(i);
                break;

            default:
                break
        }
    }

    const deletedIdx: Set<number> = new Set()
    const stack: number[] = []

    while (openIdx.length > 0 && closeIdx.length > 0) {
        while (openIdx.length > 0 && openIdx[openIdx.length - 1] > closeIdx[closeIdx.length - 1]) {
            deletedIdx.add(openIdx[openIdx.length - 1])
            openIdx.pop()
        }
        while (closeIdx.length > 0 && closeIdx[0] < openIdx[0]) {
            deletedIdx.add(closeIdx[0])
            closeIdx.shift()
        }

        while (stack.length === 0 || openIdx[0] < closeIdx[0]) {
            stack.push(openIdx[0])
            openIdx.shift()
        }

        while (stack.length > 0 && stack[stack.length-1] < closeIdx[0]) {
            stack.pop()
            closeIdx.shift()
        }
    }
    console.log(openIdx, closeIdx, deletedIdx)
    while (openIdx.length > 0) {
        deletedIdx.add(openIdx[openIdx.length - 1])
        openIdx.pop()
    }
    while (closeIdx.length > 0) {
        deletedIdx.add(closeIdx[0])
        closeIdx.shift()
    }
    while (stack.length > 0) {
        deletedIdx.add(stack[0])
        stack.shift()
    }

    return s.split('').reduce((carr: string, item: string, idx: number) => carr + (deletedIdx.has(idx) ? '' : item), '')
};

/**

)()


 */
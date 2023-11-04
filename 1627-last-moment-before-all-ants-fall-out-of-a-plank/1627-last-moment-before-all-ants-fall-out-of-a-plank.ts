function getLastMoment(n: number, left: number[], right: number[]): number {
    let leftGroupMove = 0;
    let rightGroupMove = 0;

    if (left.length !== 0) {
        const farestAnt = Math.max(...left);
        leftGroupMove = farestAnt 
    }

    if (right.length !== 0) {
        const farestAnt = Math.min(...right);
        rightGroupMove = n - farestAnt 
    }

    return Math.max(leftGroupMove, rightGroupMove)
};
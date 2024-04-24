function tribonacci(n: number): number {
    switch (n) {
        case 0:
            return 0;
        case 1:
            return 1;
        case 2:
            return 1;
        case 3:
            return 2;
        case 4:
            return 4;
        case 5:
            return 7;
        case 6:
            return 13;
        case 7:
            return 24;
        case 8:
            return 44;
        case 9:
            return 81;
        case 10:
            return 149;
        case 11:
            return 274;
        case 12:
            return 504;
        case 13:
            return 927;
        case 14:
            return 1705;
        case 15:
            return 3136;
        case 16:
            return 5768;
        case 17:
            return 10609;
        case 18:
            return 19513;
        case 19:
            return 35890;
        case 20:
            return 66012;
        default:
            return tribonacci(n-1)+tribonacci(n-2)+tribonacci(n-3)
    }
};
class SortList {
    list: number[];
    constructor(list: number[] = []) {
        this.list = list;
    }

    add(time: number) {
        let l: number = 0;
        let r: number = this.list.length - 1;

        while(l <= r) {
            const m: number = l + ((r - l) >>> 1);
            if(time <= this.list[m]) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        this.list.splice(l, 0, time);
    }

    checkIsAlreadyInList(time): boolean {
        let l: number = 0;
        let r: number = this.list.length - 1;

        while(l <= r) {
            const m: number = l + ((r - l) >>> 1);
            if(time === this.list[m]) return true;
            if(time < this.list[m]) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        return false;
    }

    getList(): number[] {
        return this.list;
    }

    getLength(): number {
        return this.list.length;
    }
}

class SeatManager {
    tempSeat: number;
    minStack: SortList;

    constructor(n: number) {
        this.minStack = new SortList();
        this.tempSeat = 1
    }

    reserve(): number {
        if (this.minStack.getLength() === 0) {
            console.log(this.minStack)
            return this.tempSeat++
        }
        const minNum = this.minStack.getList()[0];
        this.minStack = new SortList(this.minStack.getList().slice(1))

        return minNum
    }

    unreserve(seatNumber: number): void {
        this.minStack.add(seatNumber)
    }
}

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */
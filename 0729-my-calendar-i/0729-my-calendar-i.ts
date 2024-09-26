class MyCalendar {
    left: number;
    right: number;
    calendarStack: number[][];

    constructor(calendar: number[][] = []) {
        this.calendarStack = calendar;
        this.left = 0;
        this.right = 0;

        for (const book of calendar) {
            this.add(book[0], book[1])
        }
    }

    private add(start: number, end: number): void {
        this.calendarStack.push([start, end]);

        if (this.left > start) {
            this.left = start;
        }
        if (this.right < end) {
            this.right = end;
        }
    }

    book(start: number, end: number): boolean {
        if (end < this.left || this.right <= start) {
            this.add(start, end);
            return true;
        }

        for (const item of this.calendarStack) {
            if (start < item[1] && item[0] <= start) {
                return false;
            } else if (start <= item[0] && item[0] < end) {
                return false;
            }
        }
        this.add(start, end);
        return true;
    }
}
/*
3   8   13   18  19  25  26  27  32  33  35  39  41  42  45  47  50
                                                             ------T
                                     --------------T
                                             --------------
                                     ------------------
                     --------------T
                         ------------------
                 ------T
----T
    -----
             -----------------
*/

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
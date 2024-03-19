class MaxHeap {
    heap: number[];

    constructor() {
        this.heap = [];
    }

    private getLeftChildIndex(parentIndex: number): number {
        return 2 * parentIndex + 1;
    }

    private getRightChildIndex(parentIndex: number): number {
        return 2 * parentIndex + 2;
    }

    private getParentIndex(childIndex: number): number {
        return Math.floor((childIndex - 1) / 2);
    }

    private siftUp(index: number): void {
        let parentIndex = this.getParentIndex(index);
        while (
            index > 0 &&
            this.heap[parentIndex] < this.heap[index]
        ) {
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
            parentIndex = this.getParentIndex(index);
        }
    }

    private siftDown(index: number): void {
        let maxIndex = index;
        const leftChildIndex = this.getLeftChildIndex(index);
        const rightChildIndex = this.getRightChildIndex(index);
        const size = this.heap.length;

        if (
            leftChildIndex < size &&
            this.heap[leftChildIndex] > this.heap[maxIndex]
        ) {
            maxIndex = leftChildIndex;
        }

        if (
            rightChildIndex < size &&
            this.heap[rightChildIndex] > this.heap[maxIndex]
        ) {
            maxIndex = rightChildIndex;
        }

        if (index !== maxIndex) {
            [this.heap[index], this.heap[maxIndex]] = [this.heap[maxIndex], this.heap[index]];
            this.siftDown(maxIndex);
        }
    }

    insert(value: number): void {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1);
    }

    extractMax(): number | undefined {
        if (this.heap.length === 0) return undefined;

        const max = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0 && last !== undefined) {
            this.heap[0] = last;
            this.siftDown(0);
        }

        return max;
    }

    peek(): number | undefined {
        return this.heap.length > 0 ? this.heap[0] : undefined;
    }

    size(): number {
        return this.heap.length;
    }

    isEmpty(): boolean {
        return this.heap.length === 0;
    }
}

function leastInterval(tasks: string[], n: number): number {
    const letterMap: Map<string, number> = new Map()

    for (const task of tasks) {
        letterMap.set(task, (letterMap.get(task) || 0) + 1)
    }
    const freqArr = new MaxHeap()
    letterMap.forEach((freq: number, _letter: string) => {
        freqArr.insert(freq)
    })

    let res = 0
    while (freqArr.size() !== 0) {
        const store: number[] = [] 
        for (let i = 0; i <= n; i++) {
            const maxFreqTask = freqArr.extractMax()
            if (maxFreqTask > 1) {
                store.push(maxFreqTask-1)
            }

            if (freqArr.size() === 0 && store.length === 0) return ++res
            res+=1
        }

        for (const item of store) {
            freqArr.insert(item)
        }
    }

    return res
};
/**
n=2
a: 3    2   1
b: 3    2   1

i=0, stack [a]
a: 2

 */
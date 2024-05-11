type Comparator<T> = (a: T, b: T) => number;

class MinHeap<T> {
  private heap: T[] = [];
  private compare: Comparator<T>;

  constructor(compare: Comparator<T>) {
    this.compare = compare;
  }

  private swap(index1: number, index2: number): void {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private getLeftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  private getRightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  private heapifyUp(): void {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);

      if (this.compare(this.heap[currentIndex], this.heap[parentIndex]) < 0) {
        this.swap(parentIndex, currentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  private heapifyDown(): void {
    let currentIndex = 0;

    while (true) {
      const leftChildIndex = this.getLeftChildIndex(currentIndex);
      const rightChildIndex = this.getRightChildIndex(currentIndex);
      let smallestIndex = currentIndex;

      if (
        leftChildIndex < this.heap.length &&
        this.compare(this.heap[leftChildIndex], this.heap[smallestIndex]) < 0
      ) {
        smallestIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.compare(this.heap[rightChildIndex], this.heap[smallestIndex]) < 0
      ) {
        smallestIndex = rightChildIndex;
      }

      if (smallestIndex !== currentIndex) {
        this.swap(currentIndex, smallestIndex);
        currentIndex = smallestIndex;
      } else {
        break;
      }
    }
  }

  insert(value: T): void {
    this.heap.push(value);
    this.heapifyUp();
  }

  extractMin(): T | undefined {
    if (this.heap.length === 0) {
      return undefined;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop() as T;
    this.heapifyDown();
    return min;
  }

  peekMin(): T | undefined {
    return this.heap[0];
  }

  size(): number {
    return this.heap.length;
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }
}

type WorkerCFQ = {
    quality: number
    wage: number
}

function compareCFQ(cfq1: WorkerCFQ, cfq2: WorkerCFQ): number {
    return cfq1.wage * cfq2.quality === cfq1.quality * cfq2.wage ? 
        cfq1.quality - cfq2.quality : 
        ((cfq1.wage * cfq2.quality - cfq2.wage * cfq1.quality) / (cfq1.quality * cfq2.quality))
}

function mincostToHireWorkers(quality: number[], wage: number[], k: number): number {
    if (k === 1) return Math.min(...wage)
    const n = quality.length

    const mapOfCFQ: MinHeap<WorkerCFQ> = new MinHeap(compareCFQ)

    for (let i=0; i<n; i++) {
        const newWorkerCFO: WorkerCFQ = {
            quality: quality[i],
            wage: wage[i],
        }

        mapOfCFQ.insert(newWorkerCFO)
    }

    let res = Number.POSITIVE_INFINITY
    let currentTOQ = 0
    let currentNumOfWorker = 0
    const heapOfMaxQuality: MinHeap<number> = new MinHeap((a: number, b: number) => b-a)

    while (!mapOfCFQ.isEmpty()) {
        const minCFQ: WorkerCFQ = mapOfCFQ.extractMin()
        currentNumOfWorker+=1
        currentTOQ += minCFQ.quality

        if (currentNumOfWorker === k) {
            res = Math.min(
                res,
                (minCFQ.wage / minCFQ.quality) * currentTOQ
            )
            currentTOQ -= heapOfMaxQuality.extractMin()
            currentNumOfWorker -= 1
        }

        heapOfMaxQuality.insert(minCFQ.quality)
    }

    return res
};

/**
** statement
- workerA: qA and wA => cost for 1 quality (CFQ) = wA/qA
=> if we choose a group of K worker, base on 2nd condition total of cost (TOC) = Max(CFQ) * total of quality (TOQ)
=> min of TOC => need to find min of TOQ and CFQ

 */


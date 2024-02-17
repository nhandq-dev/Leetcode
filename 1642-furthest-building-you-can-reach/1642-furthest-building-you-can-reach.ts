class MinHeap<T> {
    private heapArray: T[] = [];

    // Function to get the index of the parent of a node
    private getParentIndex(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    // Function to get the index of the left child of a node
    private getLeftChildIndex(index: number): number {
        return 2 * index + 1;
    }

    // Function to get the index of the right child of a node
    private getRightChildIndex(index: number): number {
        return 2 * index + 2;
    }

    // Function to swap two elements in the heap
    private swap(index1: number, index2: number): void {
        const temp = this.heapArray[index1];
        this.heapArray[index1] = this.heapArray[index2];
        this.heapArray[index2] = temp;
    }

    // Function to heapify up (used after insertion)
    private heapifyUp(index: number): void {
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heapArray[parentIndex] > this.heapArray[index]) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    // Function to heapify down (used after extraction)
    private heapifyDown(index: number): void {
        const leftChildIndex = this.getLeftChildIndex(index);
        const rightChildIndex = this.getRightChildIndex(index);
        let smallestIndex = index;

        if (
            leftChildIndex < this.heapArray.length &&
            this.heapArray[leftChildIndex] < this.heapArray[smallestIndex]
        ) {
            smallestIndex = leftChildIndex;
        }

        if (
            rightChildIndex < this.heapArray.length &&
            this.heapArray[rightChildIndex] < this.heapArray[smallestIndex]
        ) {
            smallestIndex = rightChildIndex;
        }

        if (smallestIndex !== index) {
            this.swap(index, smallestIndex);
            this.heapifyDown(smallestIndex);
        }
    }

    // Function to insert a new element into the heap
    insert(element: T): void {
        this.heapArray.push(element);
        this.heapifyUp(this.heapArray.length - 1);
    }

    // Function to extract the minimum element from the heap
    extractMin(): T | undefined {
        if (this.heapArray.length === 0) {
            return undefined;
        }

        const min = this.heapArray[0];
        const lastElement = this.heapArray.pop();

        if (this.heapArray.length > 0 && lastElement !== undefined) {
            this.heapArray[0] = lastElement;
            this.heapifyDown(0);
        }

        return min;
    }

    // Function to peek at the minimum element without extracting it
    peekMin(): T | undefined {
        return this.heapArray.length > 0 ? this.heapArray[0] : undefined;
    }

    // Function to check if the heap is empty
    isEmpty(): boolean {
        return this.heapArray.length === 0;
    }

    // Function to get the size of the heap
    size(): number {
        return this.heapArray.length;
    }
}

function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
    const minHeap: MinHeap<number> = new MinHeap()

    for (let i = 0; i < heights.length - 1; i++) {
        const distance = heights[i + 1] - heights[i]

        if (heights[i] < heights[i + 1]) {
            minHeap.insert(distance)
        }

        if (minHeap.size() > ladders) {
            bricks -= minHeap.extractMin()
        }

        if (bricks < 0) return i
    }

    return heights.length - 1
};
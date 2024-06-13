/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class MinHeapNode {
  value: number;
  listIndex: number;
  node: ListNode | null;

  constructor(value: number, listIndex: number, node: ListNode | null) {
    this.value = value;
    this.listIndex = listIndex;
    this.node = node;
  }
}

class MinHeap {
  private heap: MinHeapNode[] = [];

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

      if (this.heap[parentIndex].value > this.heap[currentIndex].value) {
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
        this.heap[leftChildIndex].value < this.heap[smallestIndex].value
      ) {
        smallestIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex].value < this.heap[smallestIndex].value
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

  insert(node: MinHeapNode): void {
    this.heap.push(node);
    this.heapifyUp();
  }

  extractMin(): MinHeapNode | undefined {
    if (this.heap.length === 0) {
      return undefined;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const minNode = this.heap[0];
    this.heap[0] = this.heap.pop() as MinHeapNode;
    this.heapifyDown();
    return minNode;
  }

  peekMin(): MinHeapNode | undefined {
    return this.heap[0];
  }

  size(): number {
    return this.heap.length;
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const minHeap = new MinHeap();

  // Initialize the min heap with the first node from each linked list
  for (let i = 0; i < lists.length; i++) {
    const node = lists[i];
    if (node !== null) {
      const minHeapNode = new MinHeapNode(node.val, i, node);
      minHeap.insert(minHeapNode);
    }
  }

  // Dummy node to simplify the code
  const dummy = new ListNode();
  let current = dummy;

  while (!minHeap.isEmpty()) {
    const minNode = minHeap.extractMin();

    if (minNode) {
      // Append the minimum node to the result
      current.next = minNode.node;
      current = current.next;

      // Move to the next node in the same linked list
      if (minNode.node && minNode.node.next !== null) {
        const nextNode = minNode.node.next;
        const nextHeapNode = new MinHeapNode(nextNode.val, minNode.listIndex, nextNode);
        minHeap.insert(nextHeapNode);
      }
    }
  }

  return dummy.next;
}
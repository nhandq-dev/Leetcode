function maxEvents(events: number[][]): number {
    events.sort(([start1, end1], [start2, end2]) => start1 === start2 ? end1 - end2 : start1 - start2)
    const maxDate = events.reduce((carr, event) => Math.max(carr, event[1]), 0)
    const heapOfEvent: MinPriorityQueue<number[]> = new MinPriorityQueue((bid) => bid[1])
    let currentDate = events[0][0]
    let answer = 0

    for (let i = 0, currentDate = events[0][0]; currentDate <= maxDate; currentDate++) {

        while (i < events.length && events[i][0] <= currentDate) {
            heapOfEvent.enqueue(events[i])
            i++
        }

        while (heapOfEvent.size() !== 0 && heapOfEvent.front()[1] < currentDate) {
            heapOfEvent.dequeue()
        }

        if (heapOfEvent.size() !== 0) {
            heapOfEvent.dequeue()
            answer++
        }

    }

    return answer
};
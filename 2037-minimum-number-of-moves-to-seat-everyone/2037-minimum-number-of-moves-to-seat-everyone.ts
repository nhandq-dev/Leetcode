function minMovesToSeat(seats: number[], students: number[]): number {
    seats.sort((a, b) => a-b)
    students.sort((a, b) => a-b)
    
    return students.reduce((carr: number, student: number, idx: number) => carr + Math.abs(student - seats[idx]), 0)
};
function countStudents(students: number[], sandwiches: number[]): number {
    while (sandwiches.length) {
        let studentRunner = 0
        const n = students.length

        do {
            if (students[0] === sandwiches[0]) {
                students.shift()
                sandwiches.shift()
                break
            } else {
                students.push(students.shift())
            }

            studentRunner++
        } while (students[0] !== sandwiches[0] && studentRunner < n)

        if (studentRunner === n) {
            return sandwiches.length
        }
    }

    return 0
};
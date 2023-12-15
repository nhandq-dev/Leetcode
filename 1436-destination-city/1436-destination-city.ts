function destCity(paths: string[][]): string {
    const sorce: Set<string> = new Set()
    const destination: Set<string> = new Set()

    for (let i=0; i<paths.length; i++) {
        sorce.add(paths[i][0])
        destination.delete(paths[i][0])

        if (!sorce.has(paths[i][1])) {
            destination.add(paths[i][1])
        } else {
            destination.delete(paths[i][1])
        }
    }

    return Array.from(destination)[0]
};
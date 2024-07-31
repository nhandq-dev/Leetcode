function minHeightShelves(books: number[][], shelfWidth: number): number {
    let currFloorHeight = 0, currFloorWidth = 0
    let bookshelfHeight = Number.POSITIVE_INFINITY
    let candidate = 0

    const dp = (idx: number) => {
        if (candidate >= bookshelfHeight) return
        // console.log(idx, currFloorHeight, currFloorWidth)
        if (books[idx] === undefined) {
            candidate += currFloorHeight
            bookshelfHeight = Math.min(bookshelfHeight, candidate)
            // console.log(candidate, bookshelfHeight)
            return
        }
        const [thickness, height] = books[idx]

        // had to place this book at the current floor
        if (currFloorWidth === 0) {
            currFloorWidth = thickness
            currFloorHeight = height
            return dp(idx + 1)
        }

        if (thickness + currFloorWidth <= shelfWidth) {
            // place this book to the current floor
            const memoHeight = currFloorHeight
            const memoCandidate = candidate
            currFloorWidth += thickness                             // 4
            currFloorHeight = Math.max(currFloorHeight, height)     // 2
            dp(idx + 1)
            currFloorWidth -= thickness
            currFloorHeight = memoHeight
            candidate = memoCandidate
        }

        // place this book to the next floor
        candidate += currFloorHeight    // 4
        currFloorWidth = thickness      // 1
        currFloorHeight = height        // 1
        dp(idx + 1)

        return
    }
    dp(0)

    return bookshelfHeight
};

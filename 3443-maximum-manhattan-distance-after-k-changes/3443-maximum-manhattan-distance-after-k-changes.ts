const enum MovingOptions {
    CHANGING_N_E = 'CHANGING_N_E',
    CHANGING_N_W = 'CHANGING_N_W',
    CHANGING_S_E = 'CHANGING_S_E',
    CHANGING_S_W = 'CHANGING_S_W',
}

function maxManhattanOfPositions(positions: number[][]): number {
    let answer = 0

    for (const position of positions) {
        answer = Math.max(
            answer,
            Math.abs(position[0]) + Math.abs(position[1])
        )
    }

    return answer
}

function maxDistance(s: string, k: number): number {
    const possibleWayToMove: Map<string, number> = new Map([
        [MovingOptions.CHANGING_N_E, k],
        [MovingOptions.CHANGING_N_W, k],
        [MovingOptions.CHANGING_S_E, k],
        [MovingOptions.CHANGING_S_W, k],
    ])
    const possiblePosition: Map<string, number[]> = new Map([
        [MovingOptions.CHANGING_N_E, [0, 0]],
        [MovingOptions.CHANGING_N_W, [0, 0]],
        [MovingOptions.CHANGING_S_E, [0, 0]],
        [MovingOptions.CHANGING_S_W, [0, 0]],
    ])
    let answer = 0

    let currentPositionSE, currentPositionSW, currentPositionNE, currentPositionNW;
    for (let i = 0; i<s.length; i++) {
        switch (s.charAt(i)) {
            case 'N':
                if (possibleWayToMove.get(MovingOptions.CHANGING_N_E) > 0) {
                    currentPositionNE = possiblePosition.get(MovingOptions.CHANGING_N_E)
                    currentPositionNE[1] += 1
                    possiblePosition.set(MovingOptions.CHANGING_N_E, currentPositionNE)

                    possibleWayToMove.set(MovingOptions.CHANGING_N_E, possibleWayToMove.get(MovingOptions.CHANGING_N_E) - 1)
                } else {
                    currentPositionNE = possiblePosition.get(MovingOptions.CHANGING_N_E)
                    currentPositionNE[1] -= 1
                    possiblePosition.set(MovingOptions.CHANGING_N_E, currentPositionNE)
                }
                if (possibleWayToMove.get(MovingOptions.CHANGING_N_W) > 0) {
                    currentPositionNW = possiblePosition.get(MovingOptions.CHANGING_N_W)
                    currentPositionNW[1] += 1
                    possiblePosition.set(MovingOptions.CHANGING_N_W, currentPositionNW)

                    possibleWayToMove.set(MovingOptions.CHANGING_N_W, possibleWayToMove.get(MovingOptions.CHANGING_N_W) - 1)
                } else {
                    currentPositionNW = possiblePosition.get(MovingOptions.CHANGING_N_W)
                    currentPositionNW[1] -= 1
                    possiblePosition.set(MovingOptions.CHANGING_N_W, currentPositionNW)
                }

                currentPositionSE = possiblePosition.get(MovingOptions.CHANGING_S_E)
                currentPositionSW = possiblePosition.get(MovingOptions.CHANGING_S_W)
                currentPositionSE[1] -= 1
                currentPositionSW[1] -= 1
                possiblePosition.set(MovingOptions.CHANGING_S_E, currentPositionSE)
                possiblePosition.set(MovingOptions.CHANGING_S_W, currentPositionSW)

                answer = Math.max(answer, maxManhattanOfPositions(Array.from(possiblePosition.values())))
                break
            case 'S':
                if (possibleWayToMove.get(MovingOptions.CHANGING_S_E) > 0) {
                    currentPositionSE = possiblePosition.get(MovingOptions.CHANGING_S_E)
                    currentPositionSE[1] -= 1
                    possiblePosition.set(MovingOptions.CHANGING_S_E, currentPositionSE)

                    possibleWayToMove.set(MovingOptions.CHANGING_S_E, possibleWayToMove.get(MovingOptions.CHANGING_S_E) - 1)
                } else {
                    currentPositionSE = possiblePosition.get(MovingOptions.CHANGING_S_E)
                    currentPositionSE[1] += 1
                    possiblePosition.set(MovingOptions.CHANGING_S_E, currentPositionSE)
                }
                if (possibleWayToMove.get(MovingOptions.CHANGING_S_W) > 0) {
                    currentPositionSW = possiblePosition.get(MovingOptions.CHANGING_S_W)
                    currentPositionSW[1] -= 1
                    possiblePosition.set(MovingOptions.CHANGING_S_W, currentPositionSW)

                    possibleWayToMove.set(MovingOptions.CHANGING_S_W, possibleWayToMove.get(MovingOptions.CHANGING_S_W) - 1)
                } else {
                    currentPositionSW = possiblePosition.get(MovingOptions.CHANGING_S_W)
                    currentPositionSW[1] += 1
                    possiblePosition.set(MovingOptions.CHANGING_S_W, currentPositionSW)
                }

                currentPositionNE = possiblePosition.get(MovingOptions.CHANGING_N_E)
                currentPositionNW = possiblePosition.get(MovingOptions.CHANGING_N_W)
                currentPositionNE[1] += 1
                currentPositionNW[1] += 1
                possiblePosition.set(MovingOptions.CHANGING_N_E, currentPositionNE)
                possiblePosition.set(MovingOptions.CHANGING_N_W, currentPositionNW)

                answer = Math.max(answer, maxManhattanOfPositions(Array.from(possiblePosition.values())))
                break
            case 'W':
                if (possibleWayToMove.get(MovingOptions.CHANGING_N_W) > 0) {
                    currentPositionNW = possiblePosition.get(MovingOptions.CHANGING_N_W)
                    currentPositionNW[0] += 1
                    possiblePosition.set(MovingOptions.CHANGING_N_W, currentPositionNW)

                    possibleWayToMove.set(MovingOptions.CHANGING_N_W, possibleWayToMove.get(MovingOptions.CHANGING_N_W) - 1)
                } else {
                    currentPositionNW = possiblePosition.get(MovingOptions.CHANGING_N_W)
                    currentPositionNW[0] -= 1
                    possiblePosition.set(MovingOptions.CHANGING_N_W, currentPositionNW)
                }
                if (possibleWayToMove.get(MovingOptions.CHANGING_S_W) > 0) {
                    currentPositionSW = possiblePosition.get(MovingOptions.CHANGING_S_W)
                    currentPositionSW[0] += 1
                    possiblePosition.set(MovingOptions.CHANGING_S_W, currentPositionSW)

                    possibleWayToMove.set(MovingOptions.CHANGING_S_W, possibleWayToMove.get(MovingOptions.CHANGING_S_W) - 1)
                } else {
                    currentPositionSW = possiblePosition.get(MovingOptions.CHANGING_S_W)
                    currentPositionSW[0] -= 1
                    possiblePosition.set(MovingOptions.CHANGING_S_W, currentPositionSW)
                }

                currentPositionNE = possiblePosition.get(MovingOptions.CHANGING_N_E)
                currentPositionSE = possiblePosition.get(MovingOptions.CHANGING_S_E)
                currentPositionNE[0] -= 1
                currentPositionSE[0] -= 1
                possiblePosition.set(MovingOptions.CHANGING_N_E, currentPositionNE)
                possiblePosition.set(MovingOptions.CHANGING_S_E, currentPositionSE)

                answer = Math.max(answer, maxManhattanOfPositions(Array.from(possiblePosition.values())))
                break
            case 'E':
                if (possibleWayToMove.get(MovingOptions.CHANGING_N_E) > 0) {
                    currentPositionNE = possiblePosition.get(MovingOptions.CHANGING_N_E)
                    currentPositionNE[0] -= 1
                    possiblePosition.set(MovingOptions.CHANGING_N_E, currentPositionNE)

                    possibleWayToMove.set(MovingOptions.CHANGING_N_E, possibleWayToMove.get(MovingOptions.CHANGING_N_E) - 1)
                } else {
                    currentPositionNE = possiblePosition.get(MovingOptions.CHANGING_N_E)
                    currentPositionNE[0] += 1
                    possiblePosition.set(MovingOptions.CHANGING_N_E, currentPositionNE)
                }
                if (possibleWayToMove.get(MovingOptions.CHANGING_S_E) > 0) {
                    currentPositionSE = possiblePosition.get(MovingOptions.CHANGING_S_E)
                    currentPositionSE[0] -= 1
                    possiblePosition.set(MovingOptions.CHANGING_S_E, currentPositionSE)

                    possibleWayToMove.set(MovingOptions.CHANGING_S_E, possibleWayToMove.get(MovingOptions.CHANGING_S_E) - 1)
                } else {
                    currentPositionSE = possiblePosition.get(MovingOptions.CHANGING_S_E)
                    currentPositionSE[0] += 1
                    possiblePosition.set(MovingOptions.CHANGING_S_E, currentPositionSE)
                }

                currentPositionNW = possiblePosition.get(MovingOptions.CHANGING_N_W)
                currentPositionSW = possiblePosition.get(MovingOptions.CHANGING_S_W)
                currentPositionNW[0] += 1
                currentPositionSW[0] += 1
                possiblePosition.set(MovingOptions.CHANGING_N_W, currentPositionNW)
                possiblePosition.set(MovingOptions.CHANGING_S_W, currentPositionSW)

                answer = Math.max(answer, maxManhattanOfPositions(Array.from(possiblePosition.values())))
                break
            default:
                break
        }
    }

    return answer
};

/**

There was 4 possible way to move
- Change N and E when possible
- Change N and W when possible
- Change S and E when possible
- Change S and W when possible

   (y)
    S
W       E (x)
    N


NSWWEW

SSWWWW

 */

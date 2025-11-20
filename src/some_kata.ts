export const move = (moves: string[], initialPosition: [number, number], direction: string) => {

    const forward = [initialPosition[0], initialPosition[1] + 1]
    const backward = [initialPosition[0], initialPosition[1] - 1]
    let currentDirection = direction

    const currentPosition = moves.map((move) => {
        if (move === 'r') {
            currentDirection = 'E'
        }

        if (move === 'f') return forward
        if (move === 'b') return backward
    })[0] as [number, number]

    return {
        position: currentPosition || initialPosition,
        direction: currentDirection
    }
}
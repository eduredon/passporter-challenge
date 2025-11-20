export const move = (moves: string[], initialPosition: [number, number], direction: string): [number, number] => {

    const forward = [initialPosition[0], initialPosition[1] + 1]
    const backward = [initialPosition[0], initialPosition[1] - 1]


    const newPosition = moves.map((move) => {
        if (move === 'f') return forward
        if (move === 'b') return backward
    })[0] as [number, number]

    return newPosition
}
export const move = (moves: string[], initialPosition: [number, number], direction: string) => {
    let posX = initialPosition[0]
    let posY = initialPosition[1]
    let currentDirection = direction

    const currentPosition = moves.map((move) => {
        if (move === 'r') {
            currentDirection = 'E'
        }

        if (move === 'f' && currentDirection === 'N') {
            posY = posY + 1
            return [posX, posY]
        }
        if (move === 'f' && currentDirection === 'E') {
            posX = posX + 1
            return [posX, posY]
        }
        if (move === 'b') return [posX, posY - 1]
    })[moves.length - 1]

    return {
        position: currentPosition ?? initialPosition,
        direction: currentDirection
    }
}
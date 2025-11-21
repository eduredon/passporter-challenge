import { expect } from "@jest/globals"
import { move } from "./some_kata"

describe("Rover Mars Kata", () => {
  it("should move forward in the north direction", () => {
    const initialDirection = "N"
    const initialPosition: [number, number] = [0, 0]

    const newPosition = move(['f'], initialPosition, initialDirection)
    expect(newPosition).toEqual({
      position: [0, 1],
      direction: 'N'
    })
  })

  it("should move backward in the north direction", () => {
    const initialDirection = "N"
    const initialPosition: [number, number] = [0, 0]

    const newPosition = move(['b'], initialPosition, initialDirection)
    expect(newPosition).toEqual({
      position: [0, -1],
      direction: 'N'
    })
  })

  it("should turn right in the east direction", () => {
    const initialDirection = "N"
    const initialPosition: [number, number] = [0, 0]

    const newPosition = move(['r'], initialPosition, initialDirection)
    expect(newPosition).toEqual({
      position: [0, 0],
      direction: 'E'
    })
  })

  it("should move forward, turn right and forward direction", () => {
    const initialDirection = "N"
    const initialPosition: [number, number] = [0, 0]

    const newPosition = move(['f', 'r', 'f'], initialPosition, initialDirection)
    expect(newPosition).toEqual({
      position: [1, 1],
      direction: 'E'
    })
  })

  it("should move forward, forward direction", () => {
    const initialDirection = "N"
    const initialPosition: [number, number] = [0, 0]

    const newPosition = move(['f', 'f'], initialPosition, initialDirection)
    expect(newPosition).toEqual({
      position: [0, 2],
      direction: 'N'
    })
  })
})

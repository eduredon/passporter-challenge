import { expect } from "@jest/globals"
import { move } from "./some_kata"

describe("Some kata", () => {
  it("should return true", () => {
    expect(true).toBe(true)
  })

  it("should move forward in the north direction", () => {
    const initialDirection = "N"
    const initialPosition: [number, number] = [0, 0]

    const newPosition = move(['f'], initialPosition, initialDirection)
    expect(newPosition).toEqual([0, 1])
  })

  it("should move backward in the north direction", () => {
    const initialDirection = "N"
    const initialPosition: [number, number] = [0, 0]

    const newPosition = move(['b'], initialPosition, initialDirection)
    expect(newPosition).toEqual([0, -1])
  })

  it("should turn right in the north direction", () => {
    const initialDirection = "N"
    const initialPosition: [number, number] = [0, 0]

    const newPosition = move(['r'], initialPosition, initialDirection)
    expect(newPosition).toEqual({
      direction: "E",
      position: [0, 0]
    })
  })
})

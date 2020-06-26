import { getBackgroundColor } from "./ProgressBar.utils"
import { tokens } from "../tokens"

describe("given a `getBackgroundColor` util", () => {
  describe("when called with an input between 0 and 100", () => {
    it("should return the appropriate color", () => {
      expect(getBackgroundColor(12)).toEqual(tokens.red)
      expect(getBackgroundColor(35)).toEqual(tokens.orangered)
      expect(getBackgroundColor(53)).toEqual(tokens.orange)
      expect(getBackgroundColor(66)).toEqual(tokens.lightorange)
      expect(getBackgroundColor(71)).toEqual(tokens.yellow)
      expect(getBackgroundColor(88)).toEqual(tokens.lightgreen)
      expect(getBackgroundColor(100)).toEqual(tokens.green)
    })
  })
  describe("when called with invalid or out of bounds input", () => {
    it("should return either green or red", () => {
      expect(getBackgroundColor(199)).toEqual(tokens.green)
      expect(getBackgroundColor(-10)).toEqual(tokens.red)
      expect(getBackgroundColor(undefined)).toEqual(tokens.red)
    })
  })
})

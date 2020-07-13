import { reformatDate } from "./reformatDate"

describe("given a `reformatDate` util", () => {
  describe("when it is called with valid input", () => {
    it("should return the date in the required format", () => {
      expect(reformatDate("2020-07-10")).toEqual("10/07/2020")
    })
  })
})

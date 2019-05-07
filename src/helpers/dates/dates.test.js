import { dateToday } from "./"

describe("Given an dateToday function", () => {
  describe("When it is called", () => {
    it("Should return the date in `DD-MM-YYYY` format", () => {
      expect(dateToday()).toMatch(/[0-1][0-9]\-[0-9]{2}\-[0-9]{4}/)
    })
  })
})

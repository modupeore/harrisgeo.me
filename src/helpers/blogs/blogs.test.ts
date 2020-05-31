import { getBlogs, getLatestId, getNewId } from "./blogs"

describe("Given a getBlogs function", () => {
  describe("When it is called", () => {
    it("Should return a valid number of blogs", async () => {
      await getBlogs().then((blogs: string[]) => {
        expect(blogs).toBeTruthy()
        expect(blogs.length).toBeGreaterThan(0)
      })
    })
  })
})
describe("Given a getLatestId function", () => {
  describe("When it is called", () => {
    it("should return a valid number", async () => {
      await getBlogs().then(async (noOfBlogs: string[]) => {
        const latestId = await getLatestId()
        expect(latestId).toEqual(noOfBlogs.length)
      })
    })
  })
})
describe("Given a getNewId function", () => {
  describe("When it is called", () => {
    it("should return a number greater than getLatestId", async () => {
      await getBlogs().then(async (noOfBlogs) => {
        const latestId = await getLatestId()
        const newId = await getNewId()
        expect(newId).toBeGreaterThan(latestId)
      })
    })
  })
})
describe("Given a", () => {
  describe("When it", () => {
    it("should", async () => {
      const yee = new Promise((resolve, reject) => {
        getNewId().then((yp) => {
          resolve(yp)
        })
      })

      expect(true).toBe(true)
    })
  })
})

const intern = require('../teamData/intern')

describe("inter", () => {
  describe("school", () => {
    it("should return school", () => {
      const test = new intern ("name", "employeeID", "email", "school");
      const result = test.school
      expect(result).toEqual('school')
    })
  })
})
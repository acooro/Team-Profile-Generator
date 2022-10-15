const manager = require('../teamData/manager')

describe("manager", () => {
  describe("office", () => {
    it("should return office", () => {
      const test = new manager ("name", "employeeID", "email", "office");
      const result = test.office
      expect(result).toEqual('office')
    })
  })
})
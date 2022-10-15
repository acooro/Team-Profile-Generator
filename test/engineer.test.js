const engineer = require('../teamData/engineer')

describe ("engineer", () => {
  describe ("github", () => {
    it("should return github", () => {
      const test = new engineer ("name", "employeeID", "email", "github");
      const result = test.github
      expect(result).toEqual("github");
    })
  })
})
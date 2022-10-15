const employee = require('../teamData/employee');

describe("employee", () => {
  it("should return a name", () => {
    const emploName = new employee("name", "employeeID", "email");
    const result = emploName.name

    expect(result).toEqual('name');
   
  })

  describe("employeeID", () => {
    it("should return an ID", () => {
      const employeeID = new employee("name", "employeeID", "email");
      const result = employeeID.employeeID
      expect(result).toEqual('employeeID');
    })
  })

  describe("email", () => {
    it("should return an ID", () => {
      const employeeID = new employee("name", "employeeID", "email");
      const result = employeeID.email
      expect(result).toEqual('email');
    })
  })
})


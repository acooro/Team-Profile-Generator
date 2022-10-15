const employee = require('../teamData/employee');

class intern extends employee {
  constructor(name, employeeID, email, school){
    super(name, employeeID, email)
    this.school = school;
  }
}

module.exports = intern;
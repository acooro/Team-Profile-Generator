const employee = require('../teamData/employee');

class engineer extends employee {
  constructor(name, employeeID, email, github){
    super(name, employeeID, email)
    this.github = github;
  }
}

module.exports = engineer;
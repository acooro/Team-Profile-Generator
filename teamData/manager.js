const employee = require('../teamData/employee');

class manager extends employee{
  constructor(name, employeeID, email, office){
    super(name, employeeID, email,)
    this.office = office;
  }
}

module.exports = manager;
const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./teamData/employee');
const engineer = require('./teamData/engineer');
const intern = require('./teamData/intern');
const manager = require('./teamData/manager');
const index = require('./index');

const dataArray = []

function writeToFile(dataArray) {
  fs.writeFile('index.html', dataArray, (err) => 
  err ? console.log ("error") : console.log ('HTML Made!'))
}

function employeeInfo() {
  return inquirer
    .prompt([
      {
        type: 'list',
        message: 'What type of employee?',
        name: 'employeeType',
        choices: ['manager', 'engineer', 'intern'],
      },
      {
        type: 'input',
        message: 'What is the employee name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is the employee ID?',
        name: 'employeeID',
      },
      {
        type: 'input',
        message: 'What is the email address?',
        name: 'email',
      }
    ])
}

function managerData() {
  return inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the office number?',
        name: 'office',
      }])
}

function engineerData() {
  return inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the gitHub ID?',
        name: 'gitHub',
      }])
}

function internData() {
  return inquirer
    .prompt([
      {
        type: 'input',
        message: 'What school are they interning for?',
        name: 'school',
      }])
}

async function askAgain() {
  return inquirer
    .prompt([
      {
        type: 'confirm',
        message: 'Do you want to add another employee?',
        name: 'confirm',

      }])
}

async function init() {

  let addAnother = true

  while (addAnother) {
    let data = await employeeInfo()


    if (data.employeeType === "manager") {
      let x = await managerData()
      data = { ...data, ...x }
      dataArray.push(data)

    } else if (data.employeeType === "engineer") {
      let y = await engineerData()
      data = { ...data, ...y }
      dataArray.push(data)
    } else {
      let z = await internData()
      data = { ...data, ...z }
      dataArray.push(data)

    }

    let result = await askAgain()

    if (!result.confirm) {
      addAnother = false
      console.log(dataArray)
      console.log(dataArray.length)
      writeToFile(index(dataArray))
    }

  }
}

init()


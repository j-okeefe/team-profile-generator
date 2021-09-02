const fs = require("fs");
const inquirer = require("inquirer");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const { writeFile } = require("fs");
const team = [];

function initiate() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the manager's id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the manager's email?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the manager's office number?",
    }
  ]).then(answers => {
    const manager = new Manager(answers.name, answersid, answers.email, answers.officeNumber);
    team.push(manager);
    newTeam();
  });
}

function newTeam() {

  inquirer.prompt([
    {
      type: "list",
      name: "selections",
      message: "Which type of team member would you like to add?",
      choices: [
        "Engineer",
        "Intern",
        "No team members"
      ]
    }
  ]).then(selection => {
    switch (selection.selections) {
      case "Engineer":
        newEngineer();
        break;
      case "Intern":
        newIntern();
        break;
      default:
        addToTeam();
    }
  });
}

function newEngineer() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the engineer's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the engineer's id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the engineer's email address?",
    },
    {
      type: "input",
      name: "github",
      message: "What is the engineer's GitHub username?",
    }
  ]).then(answers => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    team.push(engineer);
    newTeam();
  });
}

function newIntern() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the intern's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the intern's id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the intern's email address?",
    },
    {
      type: "input",
      name: "school",
      message: "What is the intern's school?",
    }
  ]).then(answers => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    team.push(intern);
    newTeam();
  });
}

fs.writeFile("index.html", "utf-8");

initiate();

const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let employees = [];

const engineerPrompt = () => {
  inquirer
    .prompt([
      {
        type: "text",
        name: "name",
        message: "Enter the engineer's name",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter the name of the engineer!");
            return false;
          }
        },
      },
      {
        type: "text",
        name: "id",
        message: "Enter the engineer's ID",
        validate: (id) => {
          if (id) {
            return true;
          } else {
            console.log("Please enter the engineer's ID");
            return false;
          }
        },
      },
      {
        type: "text",
        name: "email",
        message: "Enter the engineer's email address",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter the intern's email address");
            return false;
          }
        },
      },
      {
        type: "text",
        name: "github",
        message: "Enter the engineer's GitHub username",
        validate: (github) => {
          if (github) {
            return true;
          } else {
            console.log("Please enter the engineer's GitHub username!");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to another employee?",
        default: false,
      },
    ])
    // destructure name from the prompt object
    .then(({ name, id, email, github, confirmAddEmployee }) => {
      employees.push(new Engineer(name, id, email, github));
      if (confirmAddEmployee) {
       employeePrompt();
      }
    });
};
const internPrompt = () => {
inquirer
  .prompt([
    {
      type: "text",
      name: "name",
      message: "Enter the intern's name",
      validate: (name) => {
        if (name) {
          return true;
        } else {
          console.log("Please enter the name of the intern!");
          return false;
        }
      },
    },
    {
      type: "text",
      name: "id",
      message: "Enter the intern's ID",
      validate: (id) => {
        if (id) {
          return true;
        } else {
          console.log("Please enter the intern's ID");
          return false;
        }
      },
    },
    {
      type: "text",
      name: "email",
      message: "Enter the intern's email address",
      validate: (email) => {
        if (email) {
          return true;
        } else {
          console.log("Please enter the intern's email address");
          return false;
        }
      },
    },
    {
      type: "text",
      name: "school",
      message: "Enter the intern's school",
      validate: (school) => {
        if (school) {
          return true;
        } else {
          console.log("Please enter the intern's school!");
          return false;
        }
      },
    },
    {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to another employee?",
        default: false,
    },
  ])
  // destructure name from the prompt object
  .then(({ name, id, email, school, confirmAddEmployee }) => {
    employees.push(new Intern(name, id, email, school));
    if (confirmAddEmployee) {
      employeePrompt();
    } else {
      for (var i = 0; i < employees.length; i++){
        console.log(employees[i]);
      }
    }
  });
};

const employeePrompt = () => {
  inquirer
    .prompt({
      type: "list",
      message: "Would you like to add an Engineer or an Intern to the team?",
      name: "employeeType",
      choices: ["Engineer", "Intern"],
    })
    .then(({employeeType}) => {
      if (employeeType == "Engineer") {
        engineerPrompt();
      } else {
        internPrompt();
      }
    });
};

inquirer
  .prompt([
    {
      type: "text",
      name: "name",
      message: "Enter the team manager's name",
      validate: (name) => {
        if (name) {
          return true;
        } else {
          console.log("Please enter the name of the team manager!");
          return false;
        }
      },
    },
    {
      type: "text",
      name: "id",
      message: "Enter the team manager's ID",
      validate: (id) => {
        if (id) {
          return true;
        } else {
          console.log("Please enter the team manager's ID");
          return false;
        }
      },
    },
    {
      type: "text",
      name: "email",
      message: "Enter the team manager's email address",
      validate: (email) => {
        if (email) {
          return true;
        } else {
          console.log("Please enter the team manager's email address");
          return false;
        }
      },
    },
    {
      type: "text",
      name: "officeNumber",
      message: "Enter the team manager's office number",
      validate: (officeNumber) => {
        if (officeNumber) {
          return true;
        } else {
          console.log("Please enter the team manager's office number!");
          return false;
        }
      }
    }
  ])
  // destructure properties from the prompt object
  .then(({name, id, email, officeNumber}) => {
    employees.push(new Manager(name, id, email, officeNumber));
    employeePrompt();
  });



/*inquirer
      .prompt({
        type: "list",
        message: "What would you like to do?",
        name: "action",
        choices: ["Attack", "Use potion"],
      })
      .then(({ action }) => {
      }*/
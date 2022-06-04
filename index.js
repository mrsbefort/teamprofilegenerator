const inquirer = require("inquirer");
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/htmlrender");

//employee objects array
const employees = [];

//employees role
employeeType = () => {
    console.log("What is the employee's role?");
    return inquirer.prompt([
        //employees role
        {
            type: "list",
            message: "What is the Employee's role?",
            name: "role",
            choices: [
                'Engineer',
                'Intern'
            ],
        }
    ]).then(choice => {
        if (choice.role === 'Engineer') {
            addEngineer();
        } else {
            addIntern();
        }
    })
};

//engineer questions
addEngineer = () => {
    return inquirer.prompt([
        //question about Engineer
        {
            type: "input",
            message: "What is the Engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "Engineer's employee ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Engineer's email address:",
            name: "email"
        },
        {
            type: "input",
            message: "Engineer's github user name:",
            name: "github"
        }
    ]).then((engineerResults) => {
        engineerResults.role = "Engineer";
        const { name, id, email, github} = engineerResults;
        const newEngineer = new Engineer(name, id, email, github);
        employees.push(newEngineer);
        //ask if user wants to add another team member
        addEmployee();
    });
};

//intern questions
addIntern = () => {
    return inquirer.prompt([
        //question about Intern
        {
            type: "input",
            message: "What is the Intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "Intern's employee ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Intern's email address:",
            name: "email"
        },
        {
            type: "input",
            message: "Intern's school:",
            name: "school"
        }
    ]).then((internResults) => {
        internResults.role = "Intern";
        const { name, id, email, school} = internResults;
        const newIntern = new Intern(name, id, email, school);
        employees.push(newIntern);
        //ask if user wants to add another team member
        addEmployee();
    });
};

//add another employee yes or no prompts
addEmployee = () => {
    return inquirer.prompt([
        //add another team member
        {
            type: "list",
            message: "Add another Team Member?",
            name: "add",
            choices: [
                "Yes",
                "No"
            ],
        }
    ]).then(choice => {
        if (choice.add === "Yes") {
            employeeType();
        } else {
            renderHtml();
        };
    });
};

//initializing Manager questions and welcome message

const init = () => {
   if(!fs.existsSync(OUTPUT_DIR))
   fs.mkdirSync(OUTPUT_DIR); //conditional check
    console.log("Welcome! \nTo Generate a Team, \nAnswer the following prompts \nYour team will be organized in the \noutput folder team.html file.");
    return inquirer.prompt([
        //questions about Employee
        {
            type: "input",
            message: "Who is the team's Manager?",
            name: "name"
        },
        {
            type: "input",
            message: "Manager's employee ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Manager's email address:",
            name: "email"
        },
        {
            type: "input",
            message: "Manager's office number:",
            name: "officeNumber"
        },
    ]).then((managerResults) => {
        managerResults.role = "Manager";
        const { name, id, email, officeNumber} = managerResults;
        const newManager = new Manager(name, id, email, officeNumber);
        employees.push(newManager);
        // addEmployee();
        employeeType();
    })
};

renderHtml = () => {
    const buildHTML = render(employees);
    fs.writeFile(outputPath, buildHTML, (err) => {
        if (err) {
            return console.log(err);
        } else {
            return console.log("Team HTML file created in OUTPUT folder!")
        };
    })
};

//initialize program and begin asking user questions
init();
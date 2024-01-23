// Importing Employee subclasses (Manager, Engineer, Intern) and required modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Setting up the output directory and file path for the generated HTML
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Importing the render function from the page-template.js file
const render = require("./src/page-template.js");

// Mock data representing results from inquirer queries for Engineer, Intern, and Manager
const engineer = { name: 'engineer', email: 'engineer@engineer.com', id: 1, github: 'enginner' };
const intern = { name: 'intern', email: 'intern@intern.com', id: 2, github: 'intern' };
const manager = { name: 'manager', email: 'manager@manager.com', id: 3, github: 'manager' };

// Creating instances of the Employee subclasses (Engineer, Intern, Manager)
const engineerClass = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github);
const internClass = new Intern(intern.name, intern.id, intern.email, intern.github);
const managerClass  = new Manager(manager.name, manager.id, manager.email, manager.github);

let team = [];
team.push(engineerClass);
team.push(internClass);
team.push(managerClass);

// Rendering HTML for each employee class and logging their roles
const html = render(team);
console.log(html);




// console.log(engineerClass.getRole());


// TODO: Write Code to gather information about the development team members, and render the HTML file.
// Steps 
// 1. npm init -y – to initialise package.json file
// 2. npm i inquirer@6.3.1 - to install inquirer
// 3. npm i jest 
// 4. uptade the file package-json line 10 to: "test": "jest"
// 5. create a file .gitignore and write in it: node_modules

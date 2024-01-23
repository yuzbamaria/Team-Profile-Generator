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
const render = require("./src/pageTemplate.js");

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

async function writeToFile(fileName, data) {
    // try-catch statement for handling errors
    try {
        // Step 1: Create the full path to the file
        // Ensure the correct working directory is used when constructing the full path
        // path.join() takes one or more path segments as arguments and joins them together
        // __dirname represents the directory name of the current module
        const fullPath = path.join(__dirname, fileName);

        // Step 2: Asynchronously write data to the file
        await fs.promises.writeFile(fullPath, data);

        // Step 3: Log a success message if writing is successful
        console.log(`File "${fullPath}" written successfully.`);

    } catch (error) {
        // Step 4: Handle errors if any occur during the process
        console.error(`Error writing file: ${error.message}`);
    }
}

// function to initialize program
function init() {
    const fileName = "team.html";
    writeToFile(fileName, html);
    console.log("Creating Team HTML File...");
    }

// function call to initialize program
init();




// console.log(engineerClass.getRole());


// TODO: Write Code to gather information about the development team members, and render the HTML file.
// Steps 
// 1. npm init -y – to initialise package.json file
// 2. npm i inquirer@6.3.1 - to install inquirer
// 3. npm i jest 
// 4. uptade the file package-json line 10 to: "test": "jest"
// 5. create a file .gitignore and write in it: node_modules

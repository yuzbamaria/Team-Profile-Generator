// Importing Employee subclasses (Manager, Engineer, Intern) and required modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Importing the render function from the page-template.js file
const render = require("./src/pageTemplate.js");

let team = [];

// Define questions for manager
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the manager's name:",
  },
  {
    type: "input",
    name: "id",
    message: "Enter the manager's ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter the manager's email:",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Enter the manager's office number:",
  },
];

// Define questions for engineer
const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter the engineer's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the engineer's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the engineer's email:",
      },
      {
        type: "input",
        name: "github",
        message: "Enter the engineer's github:",
      },
];

// Define questions for intern
const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter the intern's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the intern's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the intern's email:",
      },
      {
        type: "input",
        name: "school",
        message: "Enter the intern's school:",
      },
];

// Rendering HTML for each employee class and logging their roles
const html = render(team);
console.log(html);

async function writeToFile(fileName, data) {
    // try-catch statement for handling errors
    try {
        // Step 1: Create the full path to the file
        // Ensure the correct working directory is used when constructing the full path
        // path.join() takes one or more path segments as arguments and joins them together
        // `output` represents the directory name of the current module
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

// Setting up the output directory and file path for the generated HTML
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// function to initialize program
async function init() {
    // Prompt user for manager details
    const managerResponses = await inquirer.prompt(managerQuestions);
    const manager = new Manager(managerResponses.name, managerResponses.id, managerResponses.email, managerResponses.officeNumber);
    team.push(manager);

    // Prompt user for engineer details (you can repeat this for each engineer)
    const engineerResponses = await inquirer.prompt(engineerQuestions);
    const engineer = new Engineer(engineerResponses.name, engineerResponses.id, engineerResponses.email, engineerResponses.github);
    team.push(engineer);

    // Prompt user for intern details (you can repeat this for each intern)
    const internResponses = await inquirer.prompt(internQuestions);
    const intern = new Intern(internResponses.name, internResponses.id, internResponses.email, internResponses.school);
    team.push(intern);

    // Render the HTML content based on the team array
    const html = render(team);

    // Specify the output file name
    // outputPath = "team.html";

    // Write the HTML content to a file
    await writeToFile(outputPath, html);
    console.log("Creating Team HTML File...");
}

// function call to initialize program
init();



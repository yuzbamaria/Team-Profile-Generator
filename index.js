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
    default: "Manager"
  },
  {
    type: "input",
    name: "id",
    message: "Enter the manager's ID:",
    default: "1"
  },
  {
    type: "input",
    name: "email",
    message: "Enter the manager's email:",
    default: "manager@manager.com"
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Enter the manager's office number:",
    default: "11"
  },
];

// Define options 
const options = [
  {
      type: 'list',
      name: 'options',
      message: 'How would you like to procees?',
      choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
  }
]

// Define questions for engineer
const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter the engineer's name:",
        default: "Engineer"
      },
      {
        type: "input",
        name: "id",
        message: "Enter the engineer's ID:",
        default: "2"
      },
      {
        type: "input",
        name: "email",
        message: "Enter the engineer's email:",
        default: "engineer@gmail.com"
      },
      {
        type: "input",
        name: "github",
        message: "Enter the engineer's github:",
        default: "https://github.com/engineer"
      },
];

// Define questions for intern
const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter the intern's name:",
        default: "Intern"
      },
      {
        type: "input",
        name: "id",
        message: "Enter the intern's ID:",
        default: "3"
      },
      {
        type: "input",
        name: "email",
        message: "Enter the intern's email:",
        default: "intern@gmail.com"
      },
      {
        type: "input",
        name: "school",
        message: "Enter the intern's school:",
        default: "local school"
      },
];

// Rendering HTML for each employee class and logging their roles
const html = render(team);
console.log(html);

let OUTPUT_DIR;
let outputPath;

async function writeToFile(data) {
    // try-catch statement for handling errors
    try {
        OUTPUT_DIR = path.resolve(__dirname, "output");
        outputPath = path.join(OUTPUT_DIR, "team.html");
        // Step 2: Asynchronously write data to the file
        // await fs.promises.writeFile('./output/team.html', data);
        await fs.promises.writeFile(outputPath, data);

        // Step 3: Log a success message if writing is successful
        console.log(`File "${outputPath}" written successfully.`);

    } catch (error) {
        // Step 4: Handle errors if any occur during the process
        console.error(`Error writing file: ${error.message}`);
    }
}

// Function to handle the user's selection
async function handleOptionSelection(option) {
  if (option === 'Add an engineer') {
    // Prompt user for engineer details
    const engineerResponses = await inquirer.prompt(engineerQuestions);
    const engineer = new Engineer(engineerResponses.name, engineerResponses.id, engineerResponses.email, engineerResponses.github);
    team.push(engineer);
  } else if (option === 'Add an intern') {
    // Prompt user for intern details
    const internResponses = await inquirer.prompt(internQuestions);
    const intern = new Intern(internResponses.name, internResponses.id, internResponses.email, internResponses.school);
    team.push(intern);
  } else if (option === 'Finish building the team') {
    // Handle finishing the team building process (e.g., render and write to file)
    const html = render(team);
    await writeToFile(html);
    console.log("Creating Team HTML File...");
    // Optional: exit the program after finishing
    process.exit(); 
  }
}

// Function to initialize program
async function init() {
  // Prompt user for manager details
  const managerResponses = await inquirer.prompt(managerQuestions);
  const manager = new Manager(managerResponses.name, managerResponses.id, managerResponses.email, managerResponses.officeNumber);
  team.push(manager);

  while (true) {
    // Prompt user for options after answering manager questions or completing previous actions
    const optionResponses = await inquirer.prompt(options);
    const nextAction = optionResponses.options;

    // Handle the selected option
    await handleOptionSelection(nextAction);
  }
}

// Function call to initialize program
init();

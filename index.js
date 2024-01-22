const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
// Steps 
// 1. npm init -y – to initialise package.json file
// 2. npm i inquirer@6.3.1 - to install inquirer
// 3. npm i jest 
// 4. uptade the file package-json line 10 to: "test": "jest"
// 5. create a file .gitignore and write in it: node_modules

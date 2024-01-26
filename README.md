[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# Team Profile Generator app using Node.js, OOP, TDD

## Desription
This is the solution for the challenge from EdX bootcamp, Week 12. During this week I learnt about OOP and Unit Testing using Jest and successfully applied my new skills to this solution.  
The application uses the Inquirer package to prompt the user for command-line input about employees (such as managers, engineers, and interns), and based on that input, it generates an HTML webpage.  
This webpage displays summaries for each employee, including their names, IDs, email addresses, and specific information related to their roles (e.g., office number for managers, GitHub usernames for engineers, and school information for interns).  
The generated HTML webpage serves as a visual representation of the input provided through the command line, making it easy to view and share employee information in a formatted manner. 


## Table of contents
1. [User story](#user_story)
2. [Usage](#usage)
3. [Installation](#installation)
4. [Tests](#tests)
5. [License](#license)
6. [Questions](#questions)

## User story
- As a manager a user wants to generate a webpage
- that displays my team's basic info
- so that a user have quick access to their emails and GitHub profiles.

## Usage
To initiate the app via the command line, navigate to the main directory of the project and run:
<pre> <code id="copyCommand"> node index.js </code> </pre>

 The application starts by requesting the user to provide details for the Manager:
 -  name
 -  employee ID
 -  email address
 -  office number
  
Then, the user is presented with options to add either an Engineer or an Intern, or to finish the team profile.

When adding an Engineer, the user is asked for:
- Engineer's name
- email address
- employee ID
- Github username

When an Intern is being added, the user is prompted for: 
- Intern's name
- email address
- employee ID
- school

Once the team is complete, the data is written to the output folder, and the user can view their finalized team creation in team.html

## Installation
1. Fork, download or clone the repository to your local machine.
2. Ensure you have Node.js installed as it is a prerequisite for running the application.
3. Execute the command npm install to install the necessary npm packages.

## Screenshots
![team.html](images/team_profile_generator/team.html.png)

## Tests 
Use ```npm run test``` to run Jest for tests on constructors.

## License 
This project is licensed under the terms of the MIT license.

## Questions 
If you have any questions about the repo, open an issue or contact me directly at here [here](mailto:yuzba.maria@gmail.com). You can find more of my work at [github/yuzbamaria](https://github.com/yuzbamaria).



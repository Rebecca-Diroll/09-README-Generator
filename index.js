// TODO: Include packages needed for this application
// TODO: Create an array of questions for user input
// const questions = [];
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// TODO: Create a function to initialize app
// function init() {}
// Function call to initialize app
// init();

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// Create writeFile function using promises
const writeREADME = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        { type: "input", name: "title", message: "Enter project title: ", },
        { type: "input", name: "description", message: "Enter project description: ", },
        { type: "input", name: "installation", message: "Enter installation instructions: ", },
        { type: "input", name: "usage", message: "Enter usage instructions: ", },
        { type: "input", name: "contributing", message: "Enter contribution guidelines: ", },
        { type: "input", name: "test", message: "Enter test instructions: ", },
        { type: "list", name: "license", message: "Choose license: ",
            choices: ["MIT", "Apache 2.0", "GPLv3"] },
        { type: "input", name: "github", message: "Enter GitHub username: ", },
        { type: "input", name: "email", message: "Enter email address: ", },
    ]);
};

const generateREADME = (answers) =>
`# ${answers.title}


## Description: 

> ${answers.description}


## Table of Contents:

    Title

    Description
    
    Table of Contents
    
    Installation
    
    Usage
    
    License
    
    Contribution Guidelines
    
    Test Instructions
    
    Questions


## Installation Instructions: 

> ${answers.installation}


## Usage Instructions: 

    ${answers.usage}


## License: 

    ${answers.license}


## Contribution Guidelines: 

    ${answers.contributing}


## Test Instructions: 

    ${answers.test}


## Questions? 

    [GitHub:  https://github.com/${answers.github}](https://github.com/${answers.github})

    [Email:  ${answers.email}](${answers.email})
`

// Use writeREADME as a promise
const init = () => {
    promptUser()
      .then((answers) => writeREADME('README.md', generateREADME(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };
  
  init();
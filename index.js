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
const { title, cpuUsage } = require("node:process");

//
// create writeFile function using promises instead of a callback function
const writeREADME = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        { type: "input", name: "title", message: "What is the title of your project?", },
        { type: "input", name: "description", message: "Write a desciption of your project.", },
        { type: "input", name: "tableOfContents", message: "Enter Table of Contents", },
        { type: "input", name: "installation", mesage: "Enter installation instructions.", },
        { type: "input", name: "usage", message: "Enter usage instructions", },
        { type: "input", name: "contribution", message: "Enter contribution guidelines.", },
        { type: "input", name: "test", message: "Enter test instructions.", },
        { type: "input", name: "license", message: "Enter license", },
        { type: "input", name: "github", message: "Enter GitHub username: ", },
        { type: "input", name: "email", message: "Enger your email address: ", }
    ])
}

const generateREADME = (answers) =>
`Title: ${answers.title}

Description: ${answers.description}

Table of Contents:
    Title
    Decription
    Table of Contents
    Installation
    Usage
    License
    Contributing
    Tests
    Questions

Installation Instructions: ${answers.installation}

Usage Instructions: ${answers.usage}


`

// Bonus using writeFileAsync as a promise
const init = () => {
    promptUser()
      .then((answers) => writeREADME('README.md', generateREADME(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };
  
  init();


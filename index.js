const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const { title, cpuUsage } = require("node:process");

//
// create writeFile function using promises instead of a callback function
const writeREADME = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input", 
            name: "title", 
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a desciption of your project.",
        },
        {
            type: "input",
            name: "tableOfContents",
            message: "Enter Table of Contents",
        },
        {
            type: "input",
            name: "installation",
            mesage: "Enter installation instructions.",
        },
        {
            type: "input",
            name: "Enter usage information.",
            message: "Enter "
        }
    ])
}



// usage 
// license
// contributing
// tests

// Bonus using writeFileAsync as a promise
const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
  
  init();

const generateREADME = (answers) 
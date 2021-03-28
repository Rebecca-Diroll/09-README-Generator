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
            choices: ["MIT", "Apache2.0", "GPLv3"] },
        { type: "input", name: "github", message: "Enter GitHub username: ", },
        { type: "input", name: "email", message: "Enter email address: ", },
    ]);
};

function createBadge(license) {
    return license ? `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)` : ''
}

const generateREADME = (answers) =>
`# ${answers.title}
${createBadge(answers.license)}

## Description: 

> ${answers.description}


## Table of Contents:
   
* [Installation](#installation)
    
* [Usage](#usage)
    
* [License](#license)
    
* [Contributing](#contributing)
    
* [Tests](#tests)
    
* [Questions](#questions)


## Installation 

> ${answers.installation}


## Usage Instructions: 

> ${answers.usage}


## License: 

> ${answers.license}


## Contribution Guidelines: 

> ${answers.contributing}


## Test Instructions: 

> ${answers.test}


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
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe the installation process for your application.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe the intended usage for your application.',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Enter the licenses used in the creation of this project.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter guidelines for contribution to this project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter instructions for testing your project.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
];

function promptUser() {
    return inquirer.prompt(questions);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fileData =
`<div id="top"></div>
<div align="center">
    <h1 align="center">${data.title}</h1>
    <p align="center">${data.description}</p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
    <summary>Table of Contents</summary>
    <ol>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#tests">Tests</a></li>
    <li><a href="#questions">Questions</a></li>
    </ol>
</details>

<!-- GETTING STARTED -->
## Installation
${data.installation}
<p align="right">(<a href="#top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage
${data.usage}    
<p align="right">(<a href="#top">back to top</a>)</p>    


<!-- LICENSE -->
## License
${data.license}
<p align="right">(<a href="#top">back to top</a>)</p>    


<!-- CONTRIBUTING -->
## Contributing
${data.contributing}

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- TESTS -->
## Tests
${data.tests}

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- QUESTIONS -->
## Questions

For any questions, feel free to contact me at <a href="mailto:${data.email}">${data.email}</a> or 
check out my <a href="http://www.github.com/${data.github}">github</a> page.

<p align="right">(<a href="#top">back to top</a>)</p>`;

    fs.writeFile(fileName, fileData, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    const data = promptUser()
        .then((data) => writeToFile('README.md', data));
}

// Function call to initialize app
init();
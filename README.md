# README Generator

## Description

This application uses the Inquirer npm package to take user input from the command line and generate a fully formatted README file. Inquirer prompts are used to ask the developer about the description, installation processes, licensing info, and the contributing and testing guidelines for the given application. The developer's contact information are also collected. Once that information is gathered, the information is injected into a README.md template and written out to a file for documentation purposes.


## User Story

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Demo

<a href="https://gfycat.com/poshbetterblackandtancoonhound">Here</a> is a demonstration of the CLI README generator application.
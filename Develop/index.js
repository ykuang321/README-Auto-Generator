// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'what is your Github username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'what is your email address?',
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT','APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  {
    default: 'npm i',
    name: 'installation',
    message: 'What command should be run to install dependencies?',
  },
  {
    default: 'npm test',
    name: 'test',
    message: 'What command should be run to install dependencies?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?',
  },
];

inquirer
  .prompt(questions)
  .then((data) => {

    const fileName = 'README.md';
    writeToFile(fileName, data);

  })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(fileName, markDown(data), (err) =>
    err ? console.log(err) : console.log("Completed") 
  )
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
